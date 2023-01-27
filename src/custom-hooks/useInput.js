import { useState } from "react";

const useInput = function (validateInput, initialState = "") {
  const [input, setInput] = useState(initialState);
  const [isTyping, setIsTyping] = useState(false);
  const [hasFocusedOnce, setHasFocusedOnce] = useState(false);

  const handleInputChange = function (event) {
    setInput(event.target.value);
  };
  const handleStartTyping = function () {
    setIsTyping(true);
    setHasFocusedOnce(true);
  };
  const handleStopTyping = function () {
    setIsTyping(false);
  };
  const inputHasError = validateInput
    ? !validateInput(input) && hasFocusedOnce
    : null;

  return {
    input,
    handleInputChange,
    isTyping,
    handleStopTyping,
    handleStartTyping,
    setInput,
    inputHasError,
  };
};

export default useInput;
