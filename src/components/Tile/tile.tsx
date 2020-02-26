import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import './tile.scss';

import MiniWidget, { MiniData } from '../MiniWidget/miniWidget';
import TileNotification from './TileNotification/tileNotification';
import { useDispatch } from 'react-redux';
import { AppEvents } from '../../data/events';
import { IAppState } from '../../data/store';

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
  paths: Array<any>;
}

const Tile: React.FC<TileProps> = props => {
  const dispatch = useDispatch();
  const { data } = props;

  const gNotifications = (state: IAppState) => state.homeHub.notifications;
  const notifications = useSelector(gNotifications);

  const gUser = (state: IAppState) => state.homeHub.user;
  const user = useSelector(gUser);

  const tileHomePage = () => {
    props.history.push(`/${data.page}`);
    dispatch({
      type: AppEvents.SET_ACTIVE_ITEM,
      payload: { main: data.title, sub: '' }
    });
  };

  const [disable, setDisable] = useState(false);

  const tileStatus = (e: React.SetStateAction<boolean>) => {
    setDisable(e);
  };

  return (
    <div className='tile' onClick={() => tileHomePage()}>
      <div className='tile-main-content'>
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
          <ul className='footer-paths'>
            {data.paths.map((path, index) => {
              return (
                <li
                  key={index}
                  className='footer-paths-item'
                  onClick={e => {
                    e.stopPropagation();
                    props.history.push(path.path);
                    dispatch({
                      type: AppEvents.SET_ACTIVE_ITEM,
                      payload: { main: data.title, sub: '' }
                    });
                  }}
                >
                  <span> {path.title}</span>
                </li>
              );
            })}
          </ul>
        </footer>
      </div>

      {notifications.map((item, index) => {
        if (
          (data.title === 'Analytics' && user === 'Manager' && item.type === data.title) ||
          (data.title === 'Jobs' && user === 'Recruiter' && item.type === data.title)
        ) {
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
