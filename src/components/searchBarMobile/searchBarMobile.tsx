import React from 'react';
import './searchBarMobile.scss';

const SearchBarMobile = () => {
  return (
    <div className='searchBarMobile' onClick={() => {}}>
      {/* <img className='icon' src={require(`../../images/${data.logo}`)} /> */}

      <div className='search'>
        <button className='search-button' type='submit'>
          <img src={require('../../images/searchBlack.svg')} />
        </button>
        <input
          className='search-input'
          type='text'
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchBarMobile;
