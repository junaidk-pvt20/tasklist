import React, { useState, useEffect } from "react";

const Timer = () => {
  const [countdown, setCountdown] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);

  // Countdown using setTimeout
  useEffect(() => {
    if (countdown > 0) {
      const timeoutId = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // 1 second
      return () => clearTimeout(timeoutId);
    }
  }, [countdown]);

  // Current time using setInterval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // 1 second
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Countdown Timer using setTimeout:</h2>
      <p>Time remaining: {formatTime(countdown * 1000)}</p>

      <h2>Current Time using setInterval:</h2>
      <p>Current Time: {new Date(currentTime).toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;
