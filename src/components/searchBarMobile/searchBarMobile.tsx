import React from 'react';
import './searchBarMobile.scss';

interface SBMProps {
  showMobileSideBar: boolean;
}

const SearchBarMobile: React.FC<SBMProps> = ({showMobileSideBar}) => {
  
  return (
    <div className={`searchBarMobile ${showMobileSideBar ? 'visible' : ''}`} onClick={() => {}}>
      {/* <img className='icon' src={require(`../../images/${data.logo}`)} /> */}

      <div className='search'>
        <button className='search-button' type='submit'>
          <img src={require('../../images/searchBlack.svg')} />
        </button>
        <input className='search-input' type='text' placeholder='Search' />
      </div>
    </div>
  );
};

export default SearchBarMobile;
