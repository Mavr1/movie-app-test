import React, { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/UI/arrow_back.svg';
import { getMovieById, getTrailer } from '../../services/api';
import styles from './styles.module.scss';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState('');

  const {
    Title: title,
    Year: year,
    Runtime: runtime,
    Type: type,
    Genre: genre,
    Plot: plot,
    imdbRating,
    Poster: poster,
  } = movie;

  const { state } = useLocation();
  const match = useRouteMatch();

  const pathname = state?.from?.pathname;
  const search = state?.from?.search;

  const { id } = match.params;

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMovieById(id);
      setMovie(data);
      const trailer = await getTrailer(title, year);
      setTrailer(trailer.data.items[0].id.videoId);
    };
    getData();
  }, [id, title, year]);

  return (
    <>
      <header className={styles.header}>
        <iframe
          title="trailer"
          width="1350"
          height="360"
          src={`https://www.youtube.com/embed/${trailer}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </header>
      <main>
        <div className={['container', styles.mainContainer].join(' ')}>
          <Link
            to={pathname ? { pathname, search } : '/'}
            className={styles.navButton}
          >
            <ArrowBack />
            <p className={styles.buttonTitle}>Back</p>
          </Link>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.infoWrapper}>
            <h2 className={styles.item}>
              Runtime: <span className={styles.itemValue}>{runtime}</span>
            </h2>
            <h2 className={styles.item}>
              Genre: <span className={styles.itemValue}>{genre}</span>
            </h2>
            <h2 className={styles.item}>
              Year: <span className={styles.itemValue}>{year}</span>
            </h2>
            <h2 className={styles.item}>
              Type: <span className={styles.itemValue}>{type}</span>
            </h2>
            <p className={styles.description}>{plot}</p>
          </div>
          <div className={styles.posterWrapper}>
            <img
              className={styles.poster}
              src={poster}
              alt="movie poster"
              width={360}
            />
            <h2 className={styles.ratingTitle}>IMDB Rating:</h2>
            <p className={styles.rating}>
              {imdbRating}
              <span className={styles.maxRating}> / 10</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieDetailsPage;
