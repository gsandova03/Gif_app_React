import React, { Fragment, useState } from "react";
import { Link, useLocation } from "wouter";
import "./styles.css";
import { useGifs } from "../../Hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

const GIFS_POPULARES = ["Colombia", "Matrix", "Chile", "Panda", "Programing"];

export default function Home() {
  const [keyword, setKeyword] = useState([]);
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleInput = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <Fragment>
      <h3>Los Gifs mas populares</h3>
      <form onSubmit={handleSubmit} className="search_form">
        <input
          onChange={handleInput}
          placeholder="Busca un gif"
          type="text"
          value={keyword}
        />
      </form>
      <ul className="search_links">
        {GIFS_POPULARES.map((populargifs) => (
          <li key={populargifs}>
            <Link className="items" to={`/search/${populargifs}`}>
              Gif de {populargifs}
            </Link>
          </li>
        ))}
      </ul>
      <h3>Ultimos Gifs..</h3>
      <ListOfGifs gifs={gifs} />
    </Fragment>
  );
}
