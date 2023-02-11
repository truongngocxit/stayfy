import styles from "./StaysListing.module.scss";
import StayItem from "./StayItem/StayItem";
import StaySkeleton from "./StaySkeleton/StaySkeleton";
import useFetchLodges from "../../custom-hooks/useFetchLodges";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

const StaysListing = function () {
  const resizeObserverRef = useRef(null);

  const [numOfGridColumns, setNumOfGridColumns] = useState(4);
  const {
    data,
    isLoading,
    fetchLodgesData,
    lastCursor,
    hasReachedEnd,
    setData,
    locationSearch,
  } = useFetchLodges();

  const intersectionObserverRef = useRef(null);
  const [lastLodgeRef, setLastLodgeRef] = useState(null);

  useLayoutEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (
      entries,
      observer
    ) {
      const currentViewportWidth = entries[0].contentRect.width;

      if (currentViewportWidth <= 544) {
        setNumOfGridColumns(1);
      } else if (currentViewportWidth <= 744) {
        setNumOfGridColumns(2);
      } else if (currentViewportWidth <= 1024) {
        setNumOfGridColumns(3);
      } else if (currentViewportWidth <= 1600) {
        setNumOfGridColumns(4);
      } else if (currentViewportWidth > 1600) {
        setNumOfGridColumns(5);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  useEffect(() => {
    //console.log("FIRST LOAD RUN");
    let ignore = false;

    if (!hasReachedEnd) {
      setData([]);
    }

    if (!ignore) {
      fetchLodgesData(null, 12);
    }

    return () => {
      ignore = true;
    };
  }, [fetchLodgesData, setData, hasReachedEnd]);

  useEffect(() => {
    //console.log("SCROLLING LOAD RUN", hasReachedEnd);
    const observerCallback = function (entries, observer) {
      entries.forEach((e) => {
        if (
          e.isIntersecting &&
          e.target === lastLodgeRef &&
          !isLoading &&
          !hasReachedEnd
        ) {
          //console.log("REQUEST");
          fetchLodgesData(
            lastCursor,
            numOfGridColumns === 1 ? 4 : numOfGridColumns * 2
          );
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
  }, [
    lastLodgeRef,
    fetchLodgesData,
    isLoading,
    lastCursor,
    numOfGridColumns,
    hasReachedEnd,
  ]);

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
      <main
        className={staysListing}
        style={{
          gridTemplateColumns: `repeat(${numOfGridColumns}, 1fr)`,
        }}
      >
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
        {new Array(numOfGridColumns === 1 ? 4 : numOfGridColumns * 2)
          .fill()
          .map((_, index) => (
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
