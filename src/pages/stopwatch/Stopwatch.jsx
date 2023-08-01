import React, { useState, useEffect } from "react";
import styles from "./Stopwatch.module.scss";
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.stopwatch}>
      <h1>Stopwatch</h1>
      <div className={styles.timer}>{formatTime()}</div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className={styles.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
