import React from 'react';
import styles from './styles.module.scss';

const MoviesItem = ({ data }) => {
  const { Poster, Title, Type, Year, imdbID } = data;
  return (
    <li className={styles.movieItem}>
      <h2 className={styles.title}>{Title}</h2>
      <div className={styles.wrapper}>
        <p className={styles.year}>{Year}</p>
        <p className={styles.type}>{Type}</p>
      </div>
    </li>
  );
};

export default MoviesItem;
