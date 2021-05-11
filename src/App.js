import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Results from "../src/pages/SearchResult";
import Detail from "../src/pages/Detail";

import { Route, Link } from "wouter";

function App() {
  return (
    <div className="Page">
      <section className="content">
        <Link to="/">
          <h1>Mi App de Gifs</h1>
        </Link>
        <Route component={Home} path="/" />
        <Route component={Results} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />

        {/* <div className="container_gifs">
          <Route 
            component={Results}
            path="/gif/:keyword"
          />
         </div> */}
      </section>
    </div>
  );
}

export default App;
