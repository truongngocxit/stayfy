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

  const resetInput = function () {
    setInput("");
    setHasFocusedOnce(false);
  };
  const inputIsInvalid = validateInput ? !validateInput(input) : null;

  const inputHasError = inputIsInvalid && hasFocusedOnce;

  return {
    input,
    handleInputChange,
    isTyping,
    handleStopTyping,
    handleStartTyping,
    setInput,
    resetInput,
    inputHasError,
    inputIsInvalid,
  };
};

export default useInput;
