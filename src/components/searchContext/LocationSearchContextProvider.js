import { createContext } from "react";
import useInput from "../../custom-hooks/useInput";

const LocationSearchContext = createContext();

const LocationSearchContextProvider = function ({ children }) {
  const {
    input: searchQuery,
    handleInputChange: handleQueryChange,
    isTyping: isTypingQuery,
    handleStopTyping: handleStopTypingQuery,
    handleStartTyping: handleStartTypingQuery,
    setInput: setQuery,
  } = useInput();

  return (
    <LocationSearchContext.Provider
      value={{
        searchQuery,
        handleQueryChange,
        isTypingQuery,
        handleStopTypingQuery,
        handleStartTypingQuery,
        setQuery,
      }}
    >
      {children}
    </LocationSearchContext.Provider>
  );
};

export { LocationSearchContextProvider };
export default LocationSearchContext;
