import { useState, useEffect, useCallback } from "react";
import { database } from "../myAppFirebase/myAppFirebase";
import {
  query,
  limitToFirst,
  ref,
  startAfter,
  get,
  orderByKey,
} from "firebase/database";
import timeoutPromiseDelay from "../utils/timeoutPromiseDelay";

const useFetchLodges = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [lastCursor, setLastCursor] = useState(null);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const fetchLodgesData = useCallback(
    async function (cursor = null) {
      if (hasReachedEnd) return;
      setIsLoading(true);
      await timeoutPromiseDelay(2.5);
      try {
        const lodgesRef = ref(database, "lodges");
        const nextEightLodgesRef = query(
          lodgesRef,
          ...(!cursor ? [orderByKey()] : [orderByKey(), startAfter(cursor)]),
          limitToFirst(8)
        );

        const snapshot = await get(nextEightLodgesRef);
        const data = await snapshot.val();

        if (!data) {
          setHasReachedEnd(true);
          setIsLoading(false);
          return;
        }
        const cleansedData = Object.entries(data).map((entry) => ({
          id: entry[0],
          ...entry[1],
        }));

        setData((prevData) => [...prevData, ...cleansedData]);
        setLastCursor(cleansedData[cleansedData.length - 1].id);
        setIsLoading(false);
      } catch (error) {
        setError(`Failed to fetch data. Error: ${error}`);
        setIsLoading(false);
      }
    },
    [hasReachedEnd]
  );

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      fetchLodgesData(null);
    }

    return () => {
      ignore = true;
    };
  }, [fetchLodgesData]);

  return { isLoading, error, data, fetchLodgesData, lastCursor, hasReachedEnd };
};

export default useFetchLodges;
