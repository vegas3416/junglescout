import React from 'react';
import './innerTile.scss';

const InnerTile = props => {
  const { title, state, content1, content2, date, hot } = props;

  return (
    <div className='innerTile'>
      <div className='innerTile-content'>
        <header className='header'>
          <span className={`header-label ${hot ? 'hot' : ''}`}>{title}</span>
          {/* {hot && <img src={require('../../../images/whatshot.png')} />} */}
        </header>
        <div className='state'>
          <span className='state-label'>{state}</span>
        </div>
        <ul className='information-content'>
          <li className='information-content-item'>
            <span className='label'>{content1}</span>
          </li>
          <li className='information-content-item'>
            <span className='label'>{content2}</span>
          </li>
        </ul>
      </div>
      <footer className='dateInput'>{date}</footer>
    </div>
  );
};

export default InnerTile;
