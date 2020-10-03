import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as SearchIco } from '../../assets/UI/search_ico.svg';
import styles from './styles.module.scss';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const history = useHistory();

  const handleInput = ({ target }) => setInput(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/movies?title=${input}`);
    setInput('');
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
