import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

const MoviesItem = ({ data, isActive }) => {
  const location = useLocation();

  const { Title: title, Type: type, Year: year, imdbID } = data;
  return (
    <li className={styles.movieItem}>
      <Link
        to={{
          pathname: `/movies/${imdbID}`,
          state: { from: location },
        }}
      >
        <div className={styles.container}>
          <h2 className={isActive ? styles.titleActive : styles.title}>
            {title}
          </h2>
          <div className={styles.wrapper}>
            <p className={isActive ? styles.yearActive : styles.year}>{year}</p>
            <p className={isActive ? styles.typeActive : styles.type}>{type}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MoviesItem;
