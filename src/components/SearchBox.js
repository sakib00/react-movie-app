import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
  return (
    <div className='w-1/3'>
      <input
        type='text'
        className='transition duration-500'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'
      />
    </div>
  );
}

export default SearchBox;
