import styles from "./StaysListing.module.scss";
import StayItem from "./StayItem/StayItem";
import useFetchData from "../../custom-hooks/useFetchData";
import StaySkeleton from "./StaySkeleton/StaySkeleton";

const StaysListing = function () {
  const { data, error, isLoading } = useFetchData(
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/lodges.json"
  );

  const cleansedData = data.map((d) => {
    return {
      id: d.id,
      name: d.name,
      location: d.location,
      images: d.images.filter((img) => img !== null),
      description: d.description,
      amenities: d.amenities,
      types: d.types,
      host: d.host,
      city: d.city,
      price:
        d.types
          .map((t) => t.price)
          .reduce((p1, p2) => Number(p1) + Number(p2)) / d.types.length,
      review:
        d.reviews.reduce((r1, r2) => Number(r1) + Number(r2)) /
        d.reviews.length,
    };
  });

  const { staysListing } = styles;
  return (
    <main className={staysListing}>
      {!isLoading &&
        cleansedData.map((entry) => <StayItem key={entry.id} item={entry} />)}
      {/* {!isLoading &&
        cleansedData
          .slice(0, 8)
          .map((entry) => <StayItem key={entry.id} item={entry} />)} */}

      {new Array(8).fill().map(() => (
        <StaySkeleton isLoading={isLoading} />
      ))}
    </main>
  );
};

export default StaysListing;
