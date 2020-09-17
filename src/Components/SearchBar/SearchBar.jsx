import React from 'react';
import './SearchBar.css';

const Student = ( { filterByFirstName } ) => {
  return (      
      <form className="search-bar">
          <input type="text" onChange={(event) => filterByFirstName(event)} />
          <input type="submit"/>
      </form>
  );
}

export default Student;