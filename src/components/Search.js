import React, { memo } from 'react';
import '../static/css/Search.css';

const Search = memo(({ search, handleSearch }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        value={search}
        placeholder="type here to search coins"
        onChange={handleSearch}
      ></input>
    </div>
  );
});

export default Search;
