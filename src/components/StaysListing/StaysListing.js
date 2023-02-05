import styles from "./StaysListing.module.scss";
import StayItem from "./StayItem/StayItem";
import StaySkeleton from "./StaySkeleton/StaySkeleton";
import useFetchLodges from "../../custom-hooks/useFetchLodges";
import { useRef, useEffect, useState } from "react";

const StaysListing = function () {
  const { data, isLoading, fetchLodgesData, lastCursor, hasReachedEnd } =
    useFetchLodges();

  const intersectionObserverRef = useRef(null);
  const [lastLodgeRef, setLastLodgeRef] = useState(null);

  useEffect(() => {
    const observerCallback = function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target === lastLodgeRef && !isLoading) {
          fetchLodgesData(lastCursor);
        } else {
          return;
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 1,
    };

    intersectionObserverRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (lastLodgeRef) {
      intersectionObserverRef.current.observe(lastLodgeRef);
    }

    return () => intersectionObserverRef.current.disconnect();
  }, [lastLodgeRef, fetchLodgesData, isLoading, lastCursor]);

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

  const { staysListing, buffer, endMessage } = styles;
  return (
    <>
      <main className={staysListing}>
        {cleansedData.map((entry, index, data) => (
          <StayItem
            key={entry.id}
            item={entry}
            ref={(node) => {
              if (index === data.length - 1) {
                setLastLodgeRef(node);
              }
            }}
          />
        ))}
        {new Array(8).fill().map((_, index) => (
          <StaySkeleton key={index} isLoading={isLoading} />
        ))}
      </main>
      {hasReachedEnd && (
        <p className={endMessage}>
          Looks like we are at the end of the road...
        </p>
      )}
      <div className={buffer}></div>
    </>
  );
};

export default StaysListing;
