import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/UI/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../assets/UI/arrow_forward.svg';
import styles from './styles.module.scss';

const Header = ({ data, title, active, page, length }) => {
  const image = data?.Poster || require('../../assets/img/main_banner.jpg');

  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      {data && (
        <div className={['container', styles.inner].join(' ')}>
          <div className={styles.titleWrapper}>
            <p className={styles.year}>{data.Year}</p>
            <p className={styles.movieTitle}>{data.Title}</p>
          </div>
          <div className={styles.navControls}>
            <Link
              to={{
                search: `?title=${title}&i=${+active - 1}&page=${page}`,
              }}
              className={
                Number(active) - 1 < 0
                  ? [styles.navButton, styles.disabled].join(' ')
                  : styles.navButton
              }
            >
              <ArrowBack />
              <p className={styles.buttonTitle}>Prev</p>
            </Link>
            <Link
              to={{
                search: `?title=${title}&i=${Number(active) + 1}&page=${page}`,
              }}
              className={
                Number(active) + 1 > length - 1
                  ? [styles.navButton, styles.disabled].join(' ')
                  : styles.navButton
              }
            >
              <p className={styles.buttonTitle}>Next</p>
              <ArrowForward />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
