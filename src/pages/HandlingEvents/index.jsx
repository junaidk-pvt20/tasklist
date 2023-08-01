import React, { useState } from "react";
import styles from "./Handling.modules.scss";

const FormValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    console.log("OnChange", e.target.value);
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    console.log("Form submitted:", inputValue);
  };

  const handleMouseEnter = () => {
    setIsValid(true);
    console.log("OnMouseEnter", isValid);
  };

  const handleKeyPress = (e) => {
    // Validate the input using a regular expression (e.g., for numbers only)
    const regex = /^[0-9]*$/;
    if (!regex.test(e.key)) {
      setIsValid(false);
    }
  };

  return (
    <div className={styles.formcontainer}>
      <h2>Form Validation</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={isValid ? "" : "invalid"}
        placeholder="Enter numbers only"
      />
      <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
        Submit
      </button>
    </div>
  );
};

export default FormValidation;
