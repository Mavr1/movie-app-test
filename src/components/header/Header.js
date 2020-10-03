import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/UI/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../assets/UI/arrow_forward.svg';
import styles from './styles.module.scss';

const Header = ({ data }) => {
  const image = data?.Poster || require('../../assets/img/main_banner.jpg');

  return (
    <header
      className={styles.headerMain}
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
            <Link to="/" className={styles.navButton}>
              <ArrowBack />
              <p className={styles.buttonTitle}>Prev</p>
            </Link>
            <Link to="/" className={styles.navButton}>
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
