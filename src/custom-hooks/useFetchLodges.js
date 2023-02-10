import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import axios from "axios";

const useFetchLodges = function () {
  const featureFilter = useSelector((state) => state.filter.feature);

  const locationSearch = useSelector((state) => state.search.query);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [lastCursor, setLastCursor] = useState(null);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const fetchLodgesData = useCallback(
    async function (cursor = null, numOfItems) {
      if (hasReachedEnd) return;
      setIsLoading(true);

      console.log(locationSearch);

      try {
        const response = await axios({
          method: "GET",
          url: "https://stayfy-backend.onrender.com/get-paginated-lodges",
          params: {
            cursor,
            numOfItems: Number(numOfItems),
            featureFilter:
              featureFilter === "isAllStays" ? null : featureFilter,
            locationFilter: locationSearch === "" ? null : locationSearch,
          },
        });

        if (response.data.hasEnded) {
          setHasReachedEnd(true);
          setIsLoading(false);
          return;
        }

        const cleansedData = Object.entries(response.data.data).map((e) => ({
          id: e[0],
          ...e[1],
        }));

        let filteredData = cloneDeep(cleansedData);

        setData((prevData) => [...prevData, ...filteredData]);
        setLastCursor(response.data.lastCursor);
        setIsLoading(false);
      } catch (error) {
        setError(`Failed to fetch data. Error: ${error}`);
        setIsLoading(false);
      }
    },
    [hasReachedEnd, featureFilter, locationSearch]
  );

  return {
    isLoading,
    error,
    data,
    fetchLodgesData,
    lastCursor,
    hasReachedEnd,
    setData,
    locationSearch,
    setLastCursor,
  };
};

export default useFetchLodges;

// const lodgesRef = ref(database, "lodges");

// const nextEightLodgesRef = query(
//   lodgesRef,
//   ...(!cursor ? [orderByKey()] : [orderByKey(), startAfter(cursor)]),
//   limitToFirst(numOfItems * 2)
// );

// const snapshot = await get(nextEightLodgesRef);
// const data = await snapshot.val();

// if (!data) {
//   setHasReachedEnd(true);
//   setIsLoading(false);
//   return;
// }
// const cleansedData = Object.entries(data).map((entry) => ({
//   id: entry[0],
//   ...entry[1],
// }));

// let filteredData = cloneDeep(cleansedData);

// setData((prevData) => [...prevData, ...filteredData]);
// setLastCursor(cleansedData[cleansedData.length - 1].id);
// setIsLoading(false);
