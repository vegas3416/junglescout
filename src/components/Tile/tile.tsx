import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import './tile.scss';

import MiniWidget, { MiniData } from '../MiniWidget/miniWidget';
import TileNotification from './TileNotification/tileNotification';
import { useDispatch } from 'react-redux';
import { AppEvents } from '../../data/events';
import { IAppState } from '../../data/store';
import ExtendedTile from './ExtendedTile/entendedTile';

interface TileProps extends RouteComponentProps<any> {
  data: TileData;
}

interface TileData {
  type: Array<string>;
  logo: string;
  page: string;
  title: string;
  subtitle: string;
  widgetData: Array<MiniData>;
  links: Array<any>;
}

const Tile: React.FC<TileProps> = props => {
  const dispatch = useDispatch();
  const { data } = props;

  const gNotifications = (state: IAppState) => state.homeHub.notifications;
  const notifications = useSelector(gNotifications);

  const tileHomePage = () => {
    props.history.push(`/${data.page}`);
    dispatch({ type: AppEvents.SET_ACTIVE_ITEM, payload: `${data.title}` });
  };

  const [disable, setDisable] = useState(false);

  const tileStatus = (e: React.SetStateAction<boolean>) => {
    setDisable(e);
  };

  return (
    <div className='tile'>
      <div className='tile-main-content' onClick={() => tileHomePage()}>
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

      {notifications.map((item, index) => {
        if (data.title === item.type) {
          return (
            <TileNotification key={index} onClick={(e: any) => tileStatus(e)} />
          );
        }
      })}
    </div>
  );
};

export default withRouter(Tile);

//e.stopPropagation();
