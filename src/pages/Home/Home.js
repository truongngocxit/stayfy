import styles from "./Home.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import BottomNav from "../../components/BottomNav/BottomNav";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

const Home = function () {
  return (
    <>
      <TopNav />
      <FilterMenu />
      <h1>This is the home page</h1>
      <BottomNav />
    </>
  );
};

export default Home;
