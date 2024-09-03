import React, { useState } from 'react'

const Quiz = () => {
    //Example Questions
    const questions= [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctOption: 2,
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctOption: 2,
        },
        {
            question: "What Car Brand's logo is a bull?",
      options: ["Honda", "Ferrari", "Lexus", "Lamborghini"],
      correctOption: 4,
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

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

  return (
    <div className="quiz-container p-4">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <Timer />
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