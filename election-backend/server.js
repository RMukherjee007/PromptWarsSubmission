const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
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

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Global Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!process.env.GEMINI_API_KEY) {
    return res.json({ text: "Offline Mode: Add your Gemini API key to enable intelligence!" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `You are a helpful, non-partisan Election Assistant. A user asks: "${message}". Provide a concise, clear answer.`;
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
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Return a JSON object for "${name}": {"name": "", "bio": "", "career": "", "facts": []}. JSON ONLY.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const data = JSON.parse(response.text().replace(/```json|```/g, '').trim());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Fetch failed." });
  }
});

// Basic Health Check
app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`Election Assistant Production Backend on ${PORT}`));
