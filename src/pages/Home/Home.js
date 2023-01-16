import styles from "./Home.module.scss";
import BottomNav from "../../components/BottomNav/BottomNav";
import StaysListing from "../../components/StaysListing/StaysListing";
import Header from "../../components/Header/Header";

const Home = function () {
  return (
    <>
      <Header hasFilter={true} />
      <StaysListing />
      <BottomNav />
    </>
  );
};

export default Home;
