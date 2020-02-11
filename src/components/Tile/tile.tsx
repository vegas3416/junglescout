import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './tile.scss';

import MiniWidget, { MiniData } from '../MiniWidget/miniWidget';
import TileNotification from './TileNotification/tileNotification';

interface TileProps extends RouteComponentProps<any> {
  data: TileData;
}

interface TileData {
  logo: string;
  page: string;
  title: string;
  subtitle: string;
  widgetData: Array<MiniData>;
  links: Array<any>;
}

const Tile: React.FC<TileProps> = props => {
  const { data } = props;

  const tileHomePage = () => {
    return props.history.push(`/${data.page}`);
  };

  const [disable, setDisable] = useState(false);

  const tileStatus = (e: React.SetStateAction<boolean>) => {
    setDisable(e);
  };

  console.log('Disabled: ', disable);
  return (
    <div className={`tile ${disable ? 'disabled' : ''}`}>
      <div
        className={`tile-main-content ${disable ? 'disabled' : ''}`}
        onClick={() => tileHomePage()}
      >
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
                <li key={index} className='footer-links-item'>
                  <a href={link.url}></a>
                  {link.title}
                </li>
              );
            })}
          </ul>
        </footer>
      </div>

      <TileNotification onClick={(e: any) => tileStatus(e)} />
    </div>
  );
};

export default withRouter(Tile);

//e.stopPropagation();
