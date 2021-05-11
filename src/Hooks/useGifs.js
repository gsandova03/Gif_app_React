import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      const useKeyword = keyword || localStorage.getItem("lastKeyword");
      getGifs({ keyword: useKeyword }).then((gifs) => {
        setGifs(gifs);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );
  return { gifs };
}
