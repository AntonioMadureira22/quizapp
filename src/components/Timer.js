import React, { useState, useEffect } from 'react';

const Timer = ({ duration = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <div className="timer-container text-right mb-4">
      <span className="text-lg font-bold">{timeLeft}s</span>
    </div>
  );
};

export default Timer;
