import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Test = function () {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async function (event) {
    event.preventDefault();

    const response = await axios({
      method: "POST",
      url: "https://stayfy-backend.onrender.com/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userName,
      },
    });

    setData(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h1>Your input: {data.userName}</h1>
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </label>
    </form>
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
