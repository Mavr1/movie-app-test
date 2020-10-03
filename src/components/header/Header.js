import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/UI/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../assets/UI/arrow_forward.svg';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.titleWrapper}>
          <p className={styles.year}>2020</p>
          <p className={styles.movieTitle}>SUPERMAN</p>
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
    </header>
  );
};

export default Header;
