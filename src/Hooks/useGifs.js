import { useEffect, useContext, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const useKeyword = keyword || localStorage.getItem("lastKeyword");

  useEffect(
    function () {
      getGifs({ keyword: useKeyword }).then((gifs) => {
        setGifs(gifs);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      getGifs({ keyword: useKeyword, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
      });
    },
    [page, setGifs, useKeyword]
  );
  return { gifs, setPage };
}
