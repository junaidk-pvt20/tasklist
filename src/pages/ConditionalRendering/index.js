import React, { useState } from "react";
import styles from "./switch.module.scss";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`${styles.switch} ${isOn ? styles.on : styles.off}`}
      onClick={handleToggle}
    >
      <div className={styles.slider} />
      <span>{isOn ? "ON" : "OFF"}</span>
    </div>
  );
};

export default Switch;
