import { useEffect, useState } from "react";
import getTrendingGifs from "services/getTrendingGifs";
import Category from "../Category/index";

export default function TrendingSearch() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingGifs().then(setTrends);
  }, []);

  return <Category name="Trending" options={trends} />;
}
