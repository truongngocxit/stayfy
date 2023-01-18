import { DateSearchContextProvider } from "./DateSearchContextProvider";
import { LocationSearchContextProvider } from "./LocationSearchContextProvider";
import { GuestNumberContextProvider } from "./GuestNumberContextProvider";

const SearchContextProvider = function ({ children }) {
  return (
    <GuestNumberContextProvider>
      <DateSearchContextProvider>
        <LocationSearchContextProvider>
          {children}
        </LocationSearchContextProvider>
      </DateSearchContextProvider>
    </GuestNumberContextProvider>
  );
};

export default SearchContextProvider;
