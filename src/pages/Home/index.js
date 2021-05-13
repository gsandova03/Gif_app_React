import React, { Fragment, useState } from "react";
import { useLocation } from "wouter";
import "./styles.css";
import { useGifs } from "Hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import Category from "components/Category";
import TrendingSearch from "components/TrendingSearch";

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
      <div className="Content">
        <div className="history_gif">
          <h3>Ultimos Gifs..</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="Tags">
          <Category
            name="Gifs Populares"
            options={[
              "Colombia",
              "Matrix",
              "Chile",
              "Panda",
              "Programing",
              "Pepa pig",
            ]}
          />
          <TrendingSearch />
        </div>
      </div>
    </Fragment>
  );
}
