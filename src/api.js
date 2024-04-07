import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '663f98b62f35cf0441bf8b451b47f044';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `trending/movie/day?language=en-US&api_key=${apiKey}`
  );
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
  );
  return response.data.results;
};

export const getMoviesDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?language=en-US&api_key=${apiKey}`
  );
  return response.data;
};

export const getMoviesCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?language=en-US&api_key=${apiKey}`
  );
  return response.data.cast;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&api_key=${apiKey}`
  );
  return response.data.results;
};

export const getTrailer = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/videos?language=en-US&api_key=${apiKey}`
  );

  return data.results.filter(v => v.name === 'Official Trailer')[0];
};
