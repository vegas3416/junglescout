import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import './expandedTile.scss';

import MiniWidget, { MiniData } from '../MiniWidget/miniWidget';
import TileNotification from '../Tile/TileNotification/tileNotification';
import { useDispatch } from 'react-redux';
import { AppEvents } from '../../data/events';
import { IAppState } from '../../data/store';
import InnerTile from './innerTile/innerTile';
import Icon from '@indeed/frontend-components-react/components/Icon';

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

const ExpandedTile: React.FC<TileProps> = props => {
  const dispatch = useDispatch();
  const { data } = props;

  const gNotifications = (state: IAppState) => state.homeHub.notifications;
  const notifications = useSelector(gNotifications);

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

  console.log(data);

  return (
    <div className='expandedTile'>
      <div className='expandedTile-main' onClick={() => tileHomePage()}>
        <div className='expandedTile-main-content'>
          <header className='header'>
            {data.logo && (
              <img
                className='logo'
                src={require(`../../images/${data.logo}`)}
              />
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
                    {path.title}
                  </li>
                );
              })}
            </ul>
          </footer>
        </div>
      </div>

      {data.title === 'Jobs' && (
        <div className='expandedTile-expanded'>
          <div className='icon-left'>
            <Icon size='md' title='<INSERT TITLE HERE>' type='chevron-left' />
          </div>

          <ul className='expandedTile-expanded-list'>
            <li className='expandedTile-expanded-list-item'>
              <InnerTile />
            </li>
            <li className='expandedTile-expanded-list-item'>
              <InnerTile />
            </li>
            <li className='expandedTile-expanded-list-item'>
              <InnerTile />
            </li>
            <li className='expandedTile-expanded-list-item'>
              <InnerTile />
            </li>
          </ul>

          <div className='icon-right'>
            <Icon size='md' title='<INSERT TITLE HERE>' type='chevron-right' />
          </div>
        </div>
      )}

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

export default withRouter(ExpandedTile);

//e.stopPropagation();