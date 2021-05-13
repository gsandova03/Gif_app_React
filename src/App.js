import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Results from "../src/pages/SearchResult";
import Detail from "../src/pages/Detail";
import gifLogo from "../src/icons/Gifs Application.svg";
import Context from "context/Context";
import { GifsContextProvaider } from "./context/GifsContext";

import { Route, Link } from "wouter";

function App() {
  return (
    <Context.Provider
      value={{
        name: "con-provaider",
        holamundo: true,
      }}
    >
      <div className="Page">
        <section className="content">
          <Link to="/">
            <img className="icon_title" src={gifLogo}></img>
          </Link>
          <GifsContextProvaider>
            <Route component={Home} path="/" />
            <Route component={Results} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvaider>
          {/* <div className="container_gifs">
          <Route 
            component={Results}
            path="/gif/:keyword"
          />
         </div> */}
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
