import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import RoomDetail from "./pages/RoomDetail/RoomDetail";
import Checkout from "./pages/Checkout/Checkout";
import Trips from "./pages/Trips/Trips";
import Signup from "./pages/Signup/Signup";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import Test from "./pages/Test/Test";

import PageLayout from "./components/PageLayout/PageLayout";
import { useSelector } from "react-redux";

const App = function () {
  const currentUserIsActive = useSelector((state) => state.activeUser.isActive);

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<RoomDetail />} />
        <Route
          path="profile"
          element={
            currentUserIsActive ? (
              <Profile />
            ) : (
              <Navigate
                to="/login"
                replace
                state={{
                  message: "Looked like you haven't logged in yet",
                  from: "profile",
                  state: "warning",
                }}
              />
            )
          }
        />
        <Route path="about" element={<About />} />
        <Route path="checkout/:id" element={<Checkout />} />
        <Route path="trips" element={<Trips />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Signup isLoggingIn={true} />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="404" element={<NotFound />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
