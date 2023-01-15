import styles from "./Trips.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import TripItem from "./TripItem/TripItem";

const Trips = function () {
  const { trips } = styles;
  return (
    <>
      <TopNav />
      <div className={trips}>
        <h2>Your upcoming trips</h2>
        <div>
          <TripItem />
        </div>
      </div>
      <StaticFooter />
    </>
  );
};

export default Trips;
