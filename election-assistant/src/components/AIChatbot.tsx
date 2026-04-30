import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithAI } from '../services/api';

interface Message {
  role: 'ai' | 'user';
  text: string;
}

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! I'm your Election Assistant. Ask me anything about the process, timelines, or how voting works." }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    try {
      const response = await chatWithAI(input);
      const aiMessage: Message = { role: 'ai', text: response.text };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = { role: 'ai', text: "Connection error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="glass-panel chatbot-container" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`message ${msg.role}`}
              style={{
                marginBottom: '16px',
                padding: '12px 16px',
                borderRadius: '12px',
                maxWidth: '80%',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? 'var(--accent-color)' : 'rgba(255,255,255,0.05)',
                marginLeft: msg.role === 'user' ? 'auto' : '0'
              }}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {isThinking && <div style={{ opacity: 0.5, fontSize: '0.8rem' }}>Assistant is thinking...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input" style={{ padding: '20px', borderTop: '1px solid var(--card-border)', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          className="search-input" 
          style={{ marginBottom: 0, flex: 1 }}
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend} style={{ padding: '10px 20px' }}>Send</button>
      </div>
    </div>
  );
};

export default AIChatbot;
