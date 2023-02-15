import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingScreen from "./components/UI/LoadingScreen/LoadingScreen";
//import Home from "./pages/Home/Home";
//import About from "./pages/About/About";
// import Profile from "./pages/Profile/Profile";
//import NotFound from "./pages/NotFound/NotFound";
//import RoomDetail from "./pages/RoomDetail/RoomDetail";
//import Checkout from "./pages/Checkout/Checkout";
//import Trips from "./pages/Trips/Trips";
//import Signup from "./pages/Signup/Signup";
//import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
//import Terms from "./pages/Terms/Terms";
import PageLayout from "./components/PageLayout/PageLayout";
import { useSelector } from "react-redux";
//import Test from "./pages/Test/Test";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const RoomDetail = lazy(() => import("./pages/RoomDetail/RoomDetail"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Trips = lazy(() => import("./pages/Trips/Trips"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const About = lazy(() => import("./pages/About/About"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Home = lazy(() => import("./pages/Home/Home"));

const App = function () {
  const loadingScreen = <LoadingScreen backgroundIsFiltered={false} />;
  const currentUserIsActive = useSelector((state) => state.activeUser.isActive);

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={loadingScreen}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="detail/:id"
          element={
            <Suspense fallback={loadingScreen}>
              <RoomDetail />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            currentUserIsActive ? (
              <Suspense fallback={loadingScreen}>
                <Profile />
              </Suspense>
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
        <Route
          path="about"
          element={
            <Suspense fallback={loadingScreen}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="checkout/:id"
          element={
            <Suspense fallback={loadingScreen}>
              <Checkout />
            </Suspense>
          }
        />
        <Route
          path="trips"
          element={
            <Suspense fallback={loadingScreen}>
              <Trips />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={loadingScreen}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={loadingScreen}>
              <Signup isLoggingIn={true} />
            </Suspense>
          }
        />

        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={loadingScreen}>
              <PrivacyPolicy />
            </Suspense>
          }
        />

        <Route
          path="terms"
          element={
            <Suspense fallback={loadingScreen}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="404"
          element={
            <Suspense fallback={loadingScreen}>
              <NotFound />
            </Suspense>
          }
        />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
