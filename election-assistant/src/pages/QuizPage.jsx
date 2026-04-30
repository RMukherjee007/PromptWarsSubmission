import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    q: "How many electoral votes are needed to win the U.S. presidency?",
    options: ["250", "270", "300", "538"],
    a: "270"
  },
  {
    q: "In what month is Election Day held?",
    options: ["October", "November", "December", "January"],
    a: "November"
  },
  {
    q: "What is the minimum age to be elected President of the United States?",
    options: ["25", "30", "35", "40"],
    a: "35"
  },
  {
    q: "Which state currently holds the first primary caucus in the nation?",
    options: ["New Hampshire", "Iowa", "South Carolina", "Florida"],
    a: "Iowa"
  },
  {
    q: "How many members are there in the Electoral College total?",
    options: ["100", "435", "535", "538"],
    a: "538"
  }
];

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === questions[currentStep].a;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  return (
    <div className="page-wrapper container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '48px' }}>Civic IQ Quiz</h1>

        {!showResult ? (
          <div className="glass-panel" style={{ padding: '48px', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            
            <h2 style={{ marginBottom: '32px', minHeight: '80px' }}>{questions[currentStep].q}</h2>

            <div style={{ display: 'grid', gap: '16px' }}>
              {questions[currentStep].options.map((opt, i) => (
                <motion.button
                  key={i}
                  className={`glass-panel haptic-press`}
                  style={{
                    padding: '20px',
                    textAlign: 'left',
                    background: selectedOption === opt 
                      ? (isCorrect ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)')
                      : 'var(--card-bg)',
                    borderColor: selectedOption === opt
                      ? (isCorrect ? '#00ff00' : '#ff0000')
                      : 'var(--card-border)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleAnswer(opt)}
                  whileHover={{ x: 5 }}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel" 
            style={{ padding: '60px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '24px' }}>
              {score === questions.length ? '🏆' : '🎓'}
            </div>
            <h2 className="text-gradient">Quiz Complete!</h2>
            <p style={{ fontSize: '1.5rem', margin: '24px 0', color: 'var(--text-secondary)' }}>
              You scored {score} out of {questions.length}
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              {score === questions.length ? "Perfect score! You're an election expert." : "Great effort! Keep exploring to boost your Civic IQ."}
            </p>
            <button 
              className="chat-send-btn" 
              onClick={() => window.location.reload()}
              style={{ padding: '16px 48px' }}
            >
              Try Again
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizPage;
