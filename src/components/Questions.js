import React from 'react'

const Questions = ({question, onAnswerClick }) => {
  return (
    <div className="question-container">
      <h2 className="text-xl mb-4">{question.question}</h2>
      <div className="options-grid grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(index)}
            className="option-btn p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions