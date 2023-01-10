import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = function (url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    let cancelRequest;
    const fetchData = async function () {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios({
          method: "GET",
          url,
          cancelToken: new axios.CancelToken(
            (token) => (cancelRequest = token)
          ),
        });

        const cleansedData = Object.entries(response.data).map((entry) => ({
          id: entry[0],
          ...entry[1],
        }));
        setData(cleansedData);
      } catch (error) {
        setError(`Request has been ${error}`);
      }
      setIsLoading(false);
    };

    fetchData();

    return () => cancelRequest();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchData;
