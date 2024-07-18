import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Make sure to import your CSS file

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {days:0, hours:0, minutes:0, seconds:0};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60) || 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="countdown-interval">
        {timeLeft[interval]} <span className="countdown-label">{interval}</span>{" "}
      </span>
    );
  });

  return (
    <div className="countdown-timer">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;
