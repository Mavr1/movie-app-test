import React, { useState } from 'react';
import { ReactComponent as SearchIco } from '../../assets/UI/search_ico.svg';
import styles from './styles.module.scss';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleInput = ({ target }) => setInput(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        placeholder="Search ..."
        className={styles.input}
        value={input}
        onChange={handleInput}
      />
      <button type="submit" className={styles.submitButton}>
        <SearchIco />
      </button>
    </form>
  );
};

export default SearchBar;
