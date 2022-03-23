// Librerías
import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
//componentes
import Layout from "../components/layout";
import { fetchMovies } from "../api/baseService";

export default function Home() {
  const [movies, setMovies] = useState([]);

//El useSelector toma como entrada el objeto que se exporta en el rootReducer, el combiner
  const movie= useSelector((state)=>state.movie)

  // dice que se va a hacer en el store, y con este mandamos que se va a hacer
  //recibe un objeto con el payload 
  const dispatch= useDispatch()


  const handleFetchMovies = async () => {
    let movies = await fetchMovies();

    console.log("MOVIES: ", movies);

    setMovies(movies.results);
  };

  useEffect(() => {
    handleFetchMovies();
  }, []);

  console.log("M: ", movie);

  return (
    <Layout>
      <h1>Home</h1>
      {movies.map((movie,i) => (
        <div key={i}>
          <button onClick={()=>dispatch({type:"SET_MOVIE",payload:movie})}>{movie.title}</button>
        </div>
        
      ))}
      {/* <Button button={handleFetchImages} /> */}
    </Layout>
  );
}
