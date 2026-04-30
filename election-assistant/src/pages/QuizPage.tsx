import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const quizData: Question[] = [
  { id: 1, question: "How many electoral votes are needed to win the Presidency?", options: ["250", "270", "300", "538"], answer: "270" },
  { id: 2, question: "How often are Presidential elections held?", options: ["2 years", "4 years", "6 years", "Variable"], answer: "4 years" },
  { id: 3, question: "Which body officially elects the President?", options: ["The Senate", "The House", "The Electoral College", "Direct Popular Vote"], answer: "The Electoral College" }
];

const QuizPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (option: string) => {
    const correct = option === quizData[currentStep].answer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      setIsCorrect(null);
      if (currentStep < quizData.length - 1) {
        setCurrentStep(s => s + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="page-wrapper container">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>{quizData[currentStep].question}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {quizData[currentStep].options.map((option, i) => (
                  <button
                    key={i}
                    className={`glass-panel btn-option ${isCorrect !== null && option === quizData[currentStep].answer ? 'correct' : ''}`}
                    style={{ padding: '20px', textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: '#fff', cursor: 'pointer' }}
                    onClick={() => handleAnswer(option)}
                    disabled={isCorrect !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Quiz Complete!</h2>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>You scored {score} out of {quizData.length}</p>
              <button className="btn btn-primary" style={{ marginTop: '40px' }} onClick={() => window.location.reload()}>Retry</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
