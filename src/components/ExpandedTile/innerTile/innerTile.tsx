import React from 'react';
import './innerTile.scss';

const InnerTile = () => {
  return (
    <div className='innerTile'>
      <div className='innerTile-content'>
        <header className='header'>
          <span className='header-label'>Mananger</span>
        </header>
        <div className='state'>
          <span className='state-label'>Open</span>
        </div>
        <ul className='information-content'>
          <li className="information-content-item"><span className="label">18 candidates</span></li>
          <li className="information-content-item"><span className="label">16 matching resumes</span></li>
        </ul>
        <footer className='dateInput'>Created 8 days ago</footer>
      </div>
    </div>
  );
};

export default InnerTile;
