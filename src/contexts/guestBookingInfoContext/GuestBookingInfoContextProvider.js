import GuestGeneralInfoContextProvicer from "./guestGeneralInfoContext";
import GuestSpecialRequestContextProvider from "./guestSpecialRequestContext";
import GuestArrivalTimeContextProvider from "./guestArrivalTimeContext";

const GuestBookingInfoContextProvider = function ({ children }) {
  return (
    <GuestArrivalTimeContextProvider>
      <GuestSpecialRequestContextProvider>
        <GuestGeneralInfoContextProvicer>
          {children}
        </GuestGeneralInfoContextProvicer>
      </GuestSpecialRequestContextProvider>
    </GuestArrivalTimeContextProvider>
  );
};

export default GuestBookingInfoContextProvider;
