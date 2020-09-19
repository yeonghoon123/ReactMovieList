import axios from "axios";

export const getMovies = async () => {
  const movies = await axios
    .get("https://yts.mx/api/v2/list_movies.json")
    .then((res) => res.data.data.movies);
  return movies;
};
