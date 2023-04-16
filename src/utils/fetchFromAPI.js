import axios from "axios";

// `https://api.tvmaze.com/search/shows?q=${searchTerm}`
// `https://api.tvmaze.com/shows/${id}`
//   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=563f7efc`;

const BASE_URL = "https://api.themoviedb.org/3/";

export const SEARCH_API = "search/movie";
export const DISCOVER_API = "discover/movie";
export const MOVIE_API = "/movie";

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";
export const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

const options = {
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// /credit/{credit_id}

// /movie/{movie_id}/credits
// /movie/{movie_id}/recommendations
// /movie/{movie_id}/similar
// /movie/{movie_id}/reviews

// /movie/{movie_id}/keywords

// /movie/{movie_id}/videos

// /movie/popular
// /movie/now_playing
// /movie/top_rated

// /trending/{media_type}/{time_window}
// /trending/movie/week
// movie||person, day||week

// /person/{person_id}
// /person/{person_id}/images
// /person/popular

// /review/{review_id}

// /search/keyword
// /search/movie
// /search/person
