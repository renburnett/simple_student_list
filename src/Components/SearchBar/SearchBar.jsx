import React from 'react';
import './SearchBar.css';

const SearchBar = ( { filterByFirstName } ) => {
  return (
      <>
        <form className="search-bar">
            <input type="text" placeholder={"Search by name"} className="text-input" onChange={(event) => filterByFirstName(event)} />
        </form>
        <hr className="hr-ting"/>
      </>
  );
}

export default SearchBar;