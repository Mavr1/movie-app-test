import axios from 'axios';

export const search = async (query, page = 1) => {
  if (!query) return;

  const { data } = await axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&page=${page}`
  );

  return data;
};

export const getPosterById = async (id) => {
  const response = await axios.get(
    `http://img.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
  );
  console.log('response :>> ', response);
};
