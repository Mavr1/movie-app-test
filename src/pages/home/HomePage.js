import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import MoviesList from '../../components/moviesList/MoviesList';
import SearchBar from '../../components/searchBar/SearchBar';
import { search } from '../../services/api';
import styles from './styles.module.scss';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    search(query)
      .then((data) => setMovies(data))
      .catch((err) => console.error('Error: ', err));
  }, [query]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>Explore movies & series</h1>
          <SearchBar setQuery={setQuery} />
          <MoviesList movies={movies} />
        </div>
      </main>
    </>
  );
};

export default HomePage;
