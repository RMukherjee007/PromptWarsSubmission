const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
      connectSrc: ["'self'", "https://generativelanguage.googleapis.com"],
      imgSrc: ["'self'", "data:"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
    },
  }
}));
app.use(cors());
app.use(express.json());

// Rate Limiting: 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests, please try again later." }
});
app.use('/api/', limiter);

const PORT = process.env.PORT || 5001;

// Initialize Gemini with System Instructions for high-level non-partisan behavior
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_INSTRUCTION = `
You are the official US Election Assistant. 
Your goal is to provide non-partisan, accurate, and educational information about the US election process.
Follow these rules:
1. Never endorse a candidate or party.
2. Use professional, clear, and objective language.
3. If asked about controversial topics, provide balanced views or stick to constitutional/legal facts.
4. Always cite that users should check local state laws for specific voting deadlines.
`;

const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  systemInstruction: SYSTEM_INSTRUCTION
});

// Global Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!process.env.GEMINI_API_KEY) {
    return res.json({ text: "Offline Mode: Add your Gemini API key to enable intelligence!" });
  }

  try {
    const prompt = `A user asks: "${message}". Provide a concise, clear answer.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ text: response.text() });
  } catch (error) {
    res.status(500).json({ error: "AI interaction failed." });
  }
});

// Candidate Search Endpoint
app.get('/api/candidate/:name', async (req, res) => {
  const { name } = req.params;
  if (!process.env.GEMINI_API_KEY) {
    return res.json({ name, bio: "Offline Mode: Gemini API key missing.", career: "N/A", facts: [] });
  }

  try {
    const prompt = `Return a JSON object for "${name}": {"name": "", "bio": "", "career": "", "facts": []}. JSON ONLY.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json(JSON.parse(response.text().replace(/```json|```/g, '').trim()));
  } catch (error) {
    res.status(500).json({ error: "Fetch failed." });
  }
});

// Basic Health Check
app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`Election Assistant Production Backend on ${PORT}`));
