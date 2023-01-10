import { useState } from "react";

const useInput = function () {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const handleInputChange = function (event) {
    setInput(event.target.value);
  };
  const handleStartTyping = function () {
    setIsTyping(true);
  };
  const handleStopTyping = function () {
    setIsTyping(false);
  };

  return {
    input,
    handleInputChange,
    isTyping,
    handleStopTyping,
    handleStartTyping,
  };
};

export default useInput;
