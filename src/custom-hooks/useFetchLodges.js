import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchQueryActions } from "../redux-store/searchQuerySlice";
import { cloneDeep } from "lodash";
import axios from "axios";

const useFetchLodges = function () {
  const {
    lastCursor,
    query: locationSearch,
    feature: featureFilter,
    hasReachedEnd,
    filters: { typesOfStay, priceRange, facilities },
  } = useSelector((state) => state.search);

  const reduxDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  //const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const fetchLodgesData = useCallback(
    async function (cursor = null, numOfItems) {
      if (hasReachedEnd) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      //url: "https://stayfy-backend.onrender.com/get-paginated-lodges",
      try {
        const response = await axios({
          method: "GET",
          url: "https://stayfy-backend-production.up.railway.app/get-paginated-lodges",
          params: {
            cursor,
            numOfItems: Number(numOfItems),
            featureFilter:
              featureFilter === "isAllStays" ? null : featureFilter,
            locationFilter: locationSearch === "" ? null : locationSearch,
            price: priceRange.min ? priceRange : null,
            facilities: facilities,
            typesOfStay: typesOfStay,
          },
        });

        if (response.data.hasEnded) {
          reduxDispatch(searchQueryActions.onHasReachedEnd());
          setIsLoading(false);
          return;
        }

        const cleansedData = Object.entries(response.data.data).map((e) => ({
          id: e[0],
          ...e[1],
        }));

        let filteredData = cloneDeep(cleansedData);

        setData((prevData) => [...prevData, ...filteredData]);
        reduxDispatch(
          searchQueryActions.updateCursor(response.data.lastCursor)
        );
        setIsLoading(false);
      } catch (error) {
        setError(`Failed to fetch data. Error: ${error}`);
        setIsLoading(false);
      }
    },
    [hasReachedEnd, featureFilter, locationSearch, reduxDispatch, priceRange]
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
