import axios from "axios";

export const getMovies = async (PageNumber) => {
  const movies = await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://yts.mx/api/v2/list_movies.json?limit=50&page=${Number(
        PageNumber
      )}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          origin: "",
          "x-requested-with": "",
        },
      }
    )
    .then((res) => res.data.data.movies);
  return movies;
};

export const getDetail = async (movieID) => {
  const details = await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://yts.mx/api/v2/movie_details.json?movie_id=${movieID}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    )
    .then((res) => res.data.data.movie);
  return details;
};
