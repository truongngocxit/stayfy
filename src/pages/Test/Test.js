import styles from "./Test.module.scss";
import { useState, useEffect, useCallback } from "react";
import { ref, query, limitToFirst, orderByKey, get } from "firebase/database";
import { database } from "../../myAppFirebase/myAppFirebase";
import axios from "axios";
import useBookSearch from "./useBookSearch";

const Test = function () {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  useBookSearch();
  const { test } = styles;
  return (
    <div className={test}>
      <input type="text" />
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
};

// const Test = function () {
//   const [data, setData] = useState([]);
//   const [lastCursor, setLastCursor] = useState(null);
//   const [hasEnd, setHasEnd] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleGetData = useCallback(async function () {
//     const usersRef = ref(database, "bookings");
//     //   const firstThreeBookingsRef = query(
//     //     usersRef,
//     //     ...(!lastCursor
//     //       ? [orderByKey()]
//     //       : [orderByKey(), startAfter(lastCursor)]),
//     //     limitToFirst(1)
//     //   );

//     const firstThreeBookingsRef = query(
//       usersRef,
//       orderByKey(),
//       limitToFirst(1)
//     );
//     setIsLoading(true);
//     const snapshot = await get(firstThreeBookingsRef);
//     const data = await snapshot.val();

//     if (!data) {
//       setHasEnd(true);
//       return;
//     }

//     const cleansedData = Object.entries(data).map((e) => ({
//       id: e[0],
//       ...e[1],
//     }));
//     setData((data) => [...data, ...cleansedData]);
//     //setLastCursor(cleansedData[cleansedData.length - 1].id);
//     setIsLoading(false);
//   }, []);
//   useEffect(() => {
//     handleGetData();
//   }, [handleGetData]);

//   console.log(data);

//   const { test } = styles;
//   return (
//     <div className={test}>
//       <h1>{isLoading ? "Loading" : "Please click"}</h1>
//       <button onClick={handleGetData}>Get data</button>
//       <ul>
//         {data.map((d) => (
//           <li key={d.id}>{d.id}</li>
//         ))}
//       </ul>
//       {hasEnd ? <p>Has ended</p> : null}
//     </div>
//   );
// };

export default Test;
