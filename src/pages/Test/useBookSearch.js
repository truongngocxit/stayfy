import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNum) {
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNum },
    });
  }, [query, pageNum]).then((response) => {
    console.log(response.data);
  });

  return null;
}
