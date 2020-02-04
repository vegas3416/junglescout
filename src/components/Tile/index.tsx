import React, { useState } from 'react';
import './tile.scss';

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
  const [show, setShow] = useState(false);

  return (
    <div className={`tile ${open ? '' : 'small'}`}>
      <img className='dots' src={require('../../images/Shift Manager.png')} />

      {open && (
        <div>
          <header className='header'>
            <span className='header-title'>{data.title}</span>
            <span className='header-date'>{data.date}</span>
          </header>

          <p>{data.subtitle}</p>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default Tile;
