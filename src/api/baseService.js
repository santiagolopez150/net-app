import axios from "axios";

export const fetchMovies = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0b32f39ac55ae3bb8aa134234754f67e&language=en-US&page=1"
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("[fetchBaseUrl] err", err);
    });
};
