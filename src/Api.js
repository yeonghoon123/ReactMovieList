import axios from "axios";

export const getMovies = async (PageNumber) => {
  const movies = await axios
    .get(
      `/list_movies.json?limit=50&page=${Number(PageNumber)}`
      // https://cors-anywhere.herokuapp.com/
      // ,
      // {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     origin: "",
      //     "x-requested-with": "XMLHttpRequest",
      //   },
      // }
    )
    .then((res) => res.data.data.movies);
  return movies;
};

export const getDetail = async (movieID) => {
  const details = await axios
    .get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieID}`
      // https://cors-anywhere.herokuapp.com/
      // , {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     origin: "",
      //     "x-requested-with": "",
      //   },
      // }
    )
    .then((res) => res.data.data.movie);
  return details;
};
