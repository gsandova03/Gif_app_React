import React, { Fragment, useState } from "react";
import { Link, useLocation } from "wouter";
import "./styles.css";

const GIFS_POPULARES = ["Colombia", "Matrix", "Chile", "Panda", "Programing"];

export default function Home() {
  const [keyword, setKeyword] = useState([]);
  const [path, pushLocation] = useLocation();

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
      <form onSubmit={handleSubmit}>
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
    </Fragment>
  );
}
