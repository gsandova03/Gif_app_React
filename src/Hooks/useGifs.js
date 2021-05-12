import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      const useKeyword = keyword || localStorage.getItem("lastKeyword");
      getGifs({ keyword: useKeyword }).then((gifs) => {
        setGifs(gifs);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );
  return { gifs };
}
