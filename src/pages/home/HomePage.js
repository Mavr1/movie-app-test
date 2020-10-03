import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import { search } from '../../services/api';
import styles from './styles.module.scss';

const HomePage = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.pageTitle}>Explore movies & series</h1>
        <SearchBar setQuery={setQuery} />
      </div>
    </main>
  );
};

export default HomePage;
