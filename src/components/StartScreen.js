import React, { useState } from 'react';
import image from '../components/images/thinkbubble.png'

const StartScreen = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim() !== '') {
      onStart(name);
    }
  };

  return (
    <div className="start-screen-container min-h-screen flex flex-col justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8">
      <div className="flex flex-col items-center">
        <img className='object-fit: scale-down h-48 w-48'
          src={image}
          alt="Quiz Logo"
        />
        <h1 className="text-4xl font-extrabold mb-2">Quiz Time!</h1>
        <p className="text-lg text-gray-200 mb-10">Challenge yourself with this quiz.</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-name w-full max-w-xs p-4 mb-6 border-none rounded-full shadow-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleStart}
          className="start-btn w-full max-w-xs p-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Start Quiz
        </button>
      </div>
      <p className="text-sm text-gray-200 mt-8">Good luck, {name ? name : "Player"}!</p>
    </div>
  );
};

export default StartScreen;
