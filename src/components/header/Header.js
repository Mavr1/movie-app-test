import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as ArrowBack } from '../../assets/img/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../assets/img/arrow_forward.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.titleWrapper}>
        <p className={styles.year}>2020</p>
        <p className={styles.movieTitle}>SUPERMAN</p>
      </div>
      <div className={styles.navControls}>
        <Link className={styles.backButton}>
          <ArrowBack />
          <p className={styles.buttonTitle}>Prev</p>
        </Link>
        <Link className={styles.forwardButton}>
          <ArrowForward />
          <p className={styles.buttonTitle}>Next</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
