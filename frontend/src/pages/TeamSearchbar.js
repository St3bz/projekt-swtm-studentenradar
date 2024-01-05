import React, { useState } from 'react';

const TeamSearchbar = ({ handleSearch, handleSuggestions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSuggestions(term);

    // If the search term is cleared, reset the search term
    if (term.trim() === '') {
      handleSearch('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text" className='searchInput' placeholder="Search teams..." value={searchTerm} onChange={handleChange}
      />
      <button type="submit">Search</button>    
    </form>
  );
};

export default TeamSearchbar;

