import React, { useState, useEffect } from 'react';
import './tile.scss';
import TileMenu from '../SubMenu/subMenu';

import MenuOne from '../SubMenu/menuOne.json';
import MiniWidget, { MiniData } from '../MiniWidget/miniWidget';

interface TileProps {
  data: TileData;
}

interface TileData {
  logo: String;
  title: String;
  subtitle: String;
  widgetData: Array<MiniData>;
  links: Array<any>;
}

const Tile: React.FC<TileProps> = ({ data }) => {
  return (
    <div className='tile'>
      <header className='header'>
        {data.logo && (
          <img className='logo' src={require(`../../images/${data.logo}`)} />
        )}
        <span className='header-title'>{data.title}</span>
      </header>

      <div className='callOuts'>
        {data.widgetData.map((data, index) => {
          return <MiniWidget key={index} data={data} />;
        })}
      </div>

      <footer className='footer'>
        <ul className='footer-links'>
          {data.links.map((link, index) => {
            return (
              <li key={index} className="footer-links-item">
                <a href={link.url}></a>
                {link.title}
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Tile;
