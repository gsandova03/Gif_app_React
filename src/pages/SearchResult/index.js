import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../Hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { gifs } = useGifs({ keyword });

  // const [gifs, setGifs] = useState([]);

  // useEffect(
  //   function () {
  //     getGifs({ keyword }).then((gifs) => {
  //       setGifs(gifs);
  //     });
  //   },
  //   [keyword]
  // );

  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
