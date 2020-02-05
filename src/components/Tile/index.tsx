import React, { useState, useEffect } from 'react';
import './tile.scss';
import TileMenu from '../SubMenu/subMenu';

import MenuOne from '../SubMenu/menuOne.json';

interface TileProps {
  data: TileData;
  open: boolean;
}

interface TileData {
  title: String;
  subtitle: String;
  description?: String;
  date?: String;
  more?: Array<String>;
}

const Tile: React.FC<TileProps> = ({ data, open }) => {
  const [isSubTabShowing, setIsSubTabShowing] = useState(false);
  return (
    <div
      className={`tile ${open ? '' : 'small'}`}
      onMouseEnter={() => setIsSubTabShowing(true)}
      onMouseLeave={() => setIsSubTabShowing(false)}
    >
      <img className='dots' src={require('../../images/Shift Manager.png')} />

      {open && (
        <div className='content'>
          <header className='header'>
            <span className='header-title'>{data.title}</span>
            <span className='header-date'>{data.date}</span>
          </header>

          <p className='subtitle'>{data.subtitle}</p>
          <p className='description'>{data.description}</p>
        </div>
      )}

      {isSubTabShowing && <TileMenu data={MenuOne} />}
    </div>
  );
};

export default Tile;
