import React from "react";
import { Link } from "wouter";
import "./gif.css";

export default function Gif({ title, url, id }) {
  return (
    <div className="list_gif_item">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} />
      </Link>
    </div>
  );
}
