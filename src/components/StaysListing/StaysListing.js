import styles from "./StaysListing.module.scss";
import StayItem from "./StayItem/StayItem";

const StaysListing = function () {
  const { staysListing } = styles;
  return (
    <main className={staysListing}>
      {new Array(20).fill(0).map((item, index) => (
        <StayItem index={index} key={index} />
      ))}
    </main>
  );
};

export default StaysListing;
