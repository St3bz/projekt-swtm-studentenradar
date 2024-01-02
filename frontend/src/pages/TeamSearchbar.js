import search from '../images/search_icon.png';
import React, { useState } from 'react';

const Searchbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={search} className="searchIcon" alt="search" />
      <input
        type="text" placeholder="Search teams..." value={searchTerm} onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;

