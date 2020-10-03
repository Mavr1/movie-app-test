import React from 'react';
import { Link } from 'react-router-dom';
import MoviesItem from '../moviesItem/MoviesItem';
import { ReactComponent as ArrowBack } from '../../assets/UI/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../assets/UI/arrow_forward.svg';
import styles from './styles.module.scss';

const MoviesList = ({ movies }) => {
  const list = movies?.Search;
  return (
    <>
      {list && (
        <div className={styles.container}>
          <ul className={styles.movies}>
            {list.map((item) => (
              <MoviesItem key={item.imdbID} data={item} />
            ))}
          </ul>
          <footer className={styles.footer}>
            <p className={styles.pageNumber}>{`Items per page: ${10}`}</p>
            <div className={styles.wrapper}>
              <Link to="/" className={styles.navButton}>
                <ArrowBack />
                <p
                  className={[styles.buttonTitle, styles.back].join(' ')}
                >{`${1} - ${10}`}</p>
              </Link>
              <Link to="/" className={styles.navButton}>
                <p className={[styles.buttonTitle, styles.forward].join(' ')}>
                  {movies.totalResults}
                </p>
                <ArrowForward />
              </Link>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default MoviesList;
