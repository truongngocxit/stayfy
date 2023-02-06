import { useEffect, useRef } from "react";

const Test = function () {
  const resizeObserverRef = useRef(null);
  const redBoxRef = useRef(null);
  useEffect(() => {
    const resizeCallback = function (entries, callback) {
      entries.forEach((e) => console.log(e));
    };

    resizeObserverRef.current = new ResizeObserver(resizeCallback);

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  return (
    <div
      ref={redBoxRef}
      style={{
        backgroundColor: "red",
        width: "200px",
        height: "200px",
      }}
    />
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
