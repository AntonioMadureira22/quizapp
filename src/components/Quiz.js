import React, { useState } from 'react';
import Question from '../components/Questions';
import Score from '../components/Score';
import Timer from '../components/Timer';
import StartScreen from '../components/StartScreen';

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctOption: 2,
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctOption: 1,
    },
  ];

  const [name, setName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTimeUp = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleStart = (userName) => {
    setName(userName);
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="quiz-container p-4">
      {!quizStarted ? (
        <StartScreen onStart={handleStart} />
      ) : showScore ? (
        <div className="text-center">
          <Score score={score} totalQuestions={questions.length} />
          <p className="text-xl mt-4">Good job, {name}!</p>
          <button
            onClick={handleRestart}
            className="restart-btn mt-4 p-2 bg-blue-500 text-white rounded hover:bg-green-400"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <Timer onTimeUp={handleTimeUp} />
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleAnswerOptionClick}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
