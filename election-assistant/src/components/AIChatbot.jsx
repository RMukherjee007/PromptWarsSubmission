import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithAI } from '../services/api';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm your Election Assistant. Ask me anything about the process, timelines, or how voting works." }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    try {
      const data = await chatWithAI(input);
      setMessages(prev => [...prev, { role: 'ai', text: data.text || "I'm having trouble thinking right now. Please try again!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Connection error. Make sure the backend server is running!" }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="chat-container glass-panel">
      <div className="chat-messages">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              className={`message ${msg.role}`}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {msg.text}
            </motion.div>
          ))}
          {isThinking && (
            <motion.div 
              className="message ai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thinking...
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <input 
          type="text" 
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
        />
        <button className="chat-send-btn" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AIChatbot;
