import DateSearchContextProvider from "./DateSearchContextProvider";
import GuestNumberContextProvider from "./GuestNumberContextProvider";
import LocationSearchContextProvider from "./LocationSearchContextProvider";

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
