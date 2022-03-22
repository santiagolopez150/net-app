
import axios from"axios";
import { useEffect } from "react";
// then se ejecuta cuando no genera error el queri, si genera error se ejecuta catch
export const fetchImages= ()=> {

    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0b32f39ac55ae3bb8aa134234754f67e&language=en-US`)
    .then((res)=>{
        console.log("[fetchImages] res:",res)
        return res
    })
    .catch((err) =>{
        console.log("[fetchImages] err: ",err)
    } )
}
//`https://jsonplaceholder.typicode.com/photos?_start=${skip}&_limit=10`