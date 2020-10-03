import axios from 'axios';

export const search = async (query) => {
  if (!query) return;

  const { data } = await axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
  );

  return data;
};
