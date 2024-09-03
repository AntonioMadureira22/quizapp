import React, { useState } from 'react';

const StartScreen = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim() !== '') {
      onStart(name);
    }
  };

  return (
    <div className="start-screen-container min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Ultimate Quiz</h1>
        <p className="text-lg mb-8">Test your knowledge and see how much you score!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-name p-4 w-full max-w-md mb-6 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleStart}
          className="start-btn w-full max-w-md p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
