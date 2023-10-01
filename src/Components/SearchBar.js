import React, { useState } from 'react';
import {BiSearchAlt2} from "react-icons/bi"

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-blue-100 py-5 mx-4 ">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className='p-3 text-lg rounded-lg relative '
          placeholder="Search by car name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit"><BiSearchAlt2 className='text-[25px] absolute top-[6%] left-[17%]'/></button>
      </form>
    </div>
  );
}

export default SearchBar;
