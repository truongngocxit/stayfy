import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Test = function () {
  const [data, setData] = useState([]);
  //const [cursor, setCursor] = useState(null);

  const handleLoadData = async function () {
    const response = await axios({
      method: "GET",
      url: "http://127.0.0.1:8080/test-route",
    });

    console.log(response.data);
  };

  useEffect(() => {
    const retrieveUserInfo = localStorage.getItem("loginInfo");

    console.log(JSON.parse(retrieveUserInfo));
  }, []);

  return (
    <div>
      <button onClick={handleLoadData}>Load facilities</button>
      <ul>
        {data.map((d) => (
          <li key={d.id} style={{ fontSize: 16 }}>
            {d.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;

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
// const response = await axios({
//   method: "GET",
//   url: "http://127.0.0.1:8080/test-infinite-scrolling",
//   params: {
//     cursor,
//   },
// });

// const cleansedData = Object.entries(response.data.data).map((e) => ({
//   id: e[0],
//   ...e[1],
// }));

// setCursor(response.data.lastCursor);
// setData((prevData) => [...prevData, ...cleansedData]);
