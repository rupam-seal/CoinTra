import React, { memo } from 'react';
import '../static/css/Search.css';
import { RiSearch2Line } from 'react-icons/ri';
import Theme from '../utils/Theme';

const Search = memo(({ search, handleSearch }) => {
  return (
    <div className="search">
      <div className="search__input-container">
        <div className="icon">
          <RiSearch2Line />
        </div>
        <input
          className="search__input"
          type="text"
          value={search}
          placeholder="type here to search coins"
          onChange={handleSearch}
        ></input>
      </div>
      <Theme />
    </div>
  );
});

export default Search;
