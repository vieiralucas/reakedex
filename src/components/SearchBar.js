import React from 'react';

const SearchBar = ({ searchTerm, onType }) => (
    <div className='search-bar'>
      <input className='search-bar-input' type='text' value={searchTerm} onChange={onType} />
    </div>
)

export default SearchBar;
