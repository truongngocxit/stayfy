import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Wishlist from "./pages/WishList/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import RoomDetail from "./pages/RoomDetail/RoomDetail";
import Checkout from "./pages/Checkout/Checkout";
import Trips from "./pages/Trips/Trips";
import Signup from "./pages/Signup/Signup";
import PageLayout from "./components/PageLayout/PageLayout";
const App = function () {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<RoomDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="checkout/:id" element={<Checkout />} />
        <Route path="trips" element={<Trips />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Signup isLoggingIn={true} />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
