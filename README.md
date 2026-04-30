# 🏛️ Election Assistant: The Ultimate Civic Tech Platform

A premium, AI-powered platform designed to demystify the democratic process, educate voters, and gamify civic engagement. Built for high-performance and a "wow-factor" user experience.

## 🚀 The "Winning" Features
- **🤖 Gemini-Powered AI Expert**: A live chat assistant that provides deep insights into election laws, history, and current processes.
- **🔍 Intelligent Candidate Researcher**: Synthesize comprehensive biographies and career highlights for any political figure, past or present.
- **🎮 Civic IQ Quiz**: A gamified experience to test and improve the user's knowledge of American democracy.
- **📈 Interactive Data & History**: Dynamic timelines of landmark elections and demographic shifts that shaped the nation.
- **✅ Personalized Voter Checklist**: A persistent, local-storage based tool to help users prepare for Election Day.
- **💎 Premium Design**: Awwwards-inspired minimalist dark mode with glassmorphism, scroll-linked animations, and fluid page transitions.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Framer Motion (Animations), React Router.
- **Backend**: Node.js, Express, Google Generative AI (Gemini 1.5 Flash).
- **Security**: Helmet, Express Rate Limit, Environment Variable isolation.
- **DevOps**: Unified monorepo structure with `concurrently` for one-command development.

## 🚦 Getting Started

### 1. Clone & Install
```bash
# Install all dependencies (Root, Frontend, Backend)
npm run install:all
```

### 2. Configure AI
Create a `.env` file in the `election-backend` directory:
```env
PORT=5001
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Launch
```bash
# Starts both Frontend (5173) and Backend (5001) simultaneously
npm run dev
```

## 📐 Architecture
The project follows a clean client-server separation. The backend acts as a secure proxy for the Gemini API, ensuring API keys are never exposed on the client side while providing rate-limiting to prevent abuse.
