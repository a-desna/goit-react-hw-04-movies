const baseUrl = 'https://api.themoviedb.org/3';

const key = 'c92c7e5a5d282c1f083a164ca14410a5';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const noImage =
  'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png';

const fetchMovieServiceTrending = () => {
  return fetch(`${baseUrl}/trending/movie/week?api_key=${key}`)
    .then(res => res.json())
    .then(res => res.results);
};

const fetchMovieServiceWithQuery = (query = '', page = 1) => {
  return fetch(
    `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`,
  )
    .then(res => res.json())
    .then(res => res);
};

const fetchMovieServiceDetails = movieId => {
  return fetch(
    `${baseUrl}/movie/${movieId}?api_key=${key}&language=en-US`,
  ).then(res => res.json());
};

const fetchMovieServiceDetailsCast = movieId => {
  return fetch(`${baseUrl}/movie/${movieId}/credits?api_key=${key}`).then(res =>
    res.json(),
  );
};

const fetchMovieServiceReviews = movieId => {
  return fetch(
    `${baseUrl}/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
  ).then(res => res.json());
};

export default {
  imageUrl,
  noImage,
  fetchMovieServiceTrending,
  fetchMovieServiceWithQuery,
  fetchMovieServiceDetails,
  fetchMovieServiceDetailsCast,
  fetchMovieServiceReviews,
};
