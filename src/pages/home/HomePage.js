import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Header from '../../components/header/Header';
import MoviesList from '../../components/moviesList/MoviesList';
import SearchBar from '../../components/searchBar/SearchBar';
import { search } from '../../services/api';
import styles from './styles.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const { title, i: active, page } = queryString.parse(location.search);
  const moviesList = movies?.Search;

  useEffect(() => {
    search(title, page)
      .then((data) => setMovies(data))
      .catch((err) => console.error('Error: ', err));
  }, [title, page]);

  return (
    <>
      <Header
        data={moviesList?.length > 0 ? moviesList[active] : false}
        title={title}
        active={active}
        page={page}
      />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>Explore movies & series</h1>
          <SearchBar />
          {title && !moviesList ? (
            <p className={styles.warning}>No match to anything</p>
          ) : (
            <MoviesList
              movies={movies}
              active={active}
              title={title}
              page={Number(page)}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
