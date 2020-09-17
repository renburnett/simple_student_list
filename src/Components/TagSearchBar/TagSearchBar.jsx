import React from 'react';
import './TagSearchBar.css';

const SearchBar = ( { filterByTag } ) => {
  return (
      <>
        <form className="search-bar">
            <input type="text" placeholder={"Search by tag"} className="text-input" onChange={(event) => filterByTag(event)} />
        </form>
        <hr className="hr-ting"/>
      </>
  );
}

export default SearchBar;