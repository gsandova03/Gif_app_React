import React from "react";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "Hooks/useGifs";
import "../../pages/SearchResult/styles.css";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
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
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />

      <br />
      <button onClick={handleNextPage} className="Pag_btn">
        Pagina Sig
      </button>
    </>
  );
}
