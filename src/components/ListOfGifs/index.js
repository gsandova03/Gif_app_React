import React from "react";
import Gif from "../Gif/Gif";
import "./list_gifs.css";

//al usar el route de wouter para renderizar la url, cambia el objeto en este caso cambia a 'params'
export default function ListOfGifs({ gifs }) {
  // // console.log({ params });
  // const [gifs, updateGifs] = useState([]);

  // const { keyword } = params;
  // // //useEffect sirve para ejecutar una accion cada vez que renderiza nuestro componente

  // useEffect(
  //   function () {
  //     getGifs({ keyword }).then((gifs) => updateGifs(gifs));
  //   },
  //   [keyword]
  // );

  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} />
      ))}
    </div>
  );
}
