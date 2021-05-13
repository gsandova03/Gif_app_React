import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Category({ name, options = [] }) {
  return (
    <div className="category_container">
      <h3 className="category_title">{name}</h3>
      <ul className="search_links">
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link className="items" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
