import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../services/getGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
      });
    },
    [keyword]
  );

  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
