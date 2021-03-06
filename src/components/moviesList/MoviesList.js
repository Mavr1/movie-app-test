import React from 'react';
import { Link } from 'react-router-dom';
import MoviesItem from '../moviesItem/MoviesItem';
import { ReactComponent as ArrowBack } from '../../assets/UI/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../assets/UI/arrow_forward.svg';
import styles from './styles.module.scss';

const MoviesList = ({ movies, active, title, page }) => {
  const list = movies?.Search;

  return (
    <>
      {list && (
        <div className={styles.container}>
          <ul className={styles.movies}>
            <img
              className={styles.poster}
              src={list.length > 0 ? list[active]?.Poster : false}
              alt="movie poster"
              width={420}
            />
            {list.map((item, idx) => (
              <MoviesItem
                key={item.imdbID}
                data={item}
                isActive={Number(active) === idx}
              />
            ))}
          </ul>
          <footer className={styles.footer}>
            <p className={styles.pageNumber}>{`Items per page: ${10}`}</p>
            <div className={styles.wrapper}>
              <div className={styles.navButton}>
                <Link
                  to={{
                    search: `?title=${title}&i=0&page=${page - 1}`,
                  }}
                  className={page - 2 < 0 ? styles.disabled : styles.null}
                >
                  <ArrowBack />
                </Link>
                <p
                  className={
                    active < 0
                      ? [styles.buttonTitle, styles.back, styles.disabled].join(
                          ' '
                        )
                      : [styles.buttonTitle, styles.back].join(' ')
                  }
                >{`${(page - 1) * 10 + 1} - ${page * 10}`}</p>
              </div>
              <div className={styles.navButton}>
                <p className={[styles.buttonTitle, styles.forward].join(' ')}>
                  {movies.totalResults}
                </p>
                <Link
                  to={{
                    search: `?title=${title}&i=0&page=${page + 1}`,
                  }}
                  className={
                    page > Math.ceil(movies.totalResults / 10) - 1
                      ? styles.disabled
                      : styles.null
                  }
                >
                  <ArrowForward />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default MoviesList;
