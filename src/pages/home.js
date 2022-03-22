import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { fetchMovies } from "../api/baseService";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const handleFetchMovies = async () => {
    let movies = await fetchMovies();

    console.log("MOVIES: ", movies);

    setMovies(movies.results);
  };

  useEffect(() => {
    handleFetchMovies();
  }, []);

  console.log("M: ", movies);

  return (
    <Layout>
      <h1>Home</h1>
      {movies.map((movie) => (
        <span>{movie.title}</span>
      ))}
      {/* <Button button={handleFetchImages} /> */}
    </Layout>
  );
}
