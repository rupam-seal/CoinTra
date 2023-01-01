import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

const Search = ({ search, handleSearch }) => {
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
    </div>
  );
};

export default Search;
