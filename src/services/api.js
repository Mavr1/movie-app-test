import axios from 'axios';

export const search = async (query, page = 1) => {
  if (!query) return;

  const { data } = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&page=${page}`
  );

  return data;
};

export const getPosterById = async (id) => {
  const response = await axios.get(
    `https://img.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
  );

  return response;
};

export const getMovieById = async (id) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`
  );

  return response;
};

export const getTrailer = async (title, year) => {
  const response = axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=trailer%20${title}%20${year}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  return response;
};
