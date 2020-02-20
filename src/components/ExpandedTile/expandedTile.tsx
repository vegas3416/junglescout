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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InnerRows from './innerRows/innerRows';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const listItem = [1, 2, 3, 4, 5];

  return (
    <div className={`expandedTile ${data.title === 'Resources' ? 'tweak' : ''}`}>
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

      {(data.title === 'Jobs' || data.title === 'Candidates') && (
        <div className='expandedTile-expanded'>
          <div className='icon-left'>
            <Icon size='md' title='<INSERT TITLE HERE>' type='chevron-left' />
          </div>
          {data.title === 'Jobs' && (
            <ul className='expandedTile-expanded-list'>
              <li
                className='expandedTile-expanded-list-item'
                onClick={e => {
                  e.stopPropagation();
                  props.history.push('/viewCandidates');
                }}
              >
                <InnerTile
                  title='Customer Service Representative'
                  state='Open'
                  content1='2 candidates'
                  content2='46 matching resumes'
                  date='Created 22 hours ago'
                  hot={true}
                />
              </li>
              <li className='expandedTile-expanded-list-item'>
                <InnerTile
                  title='Manager'
                  state='Open'
                  content1='18 candidates'
                  content2='16 matching resumes'
                  date='Created 8 days ago'
                  hot={true}
                />
              </li>
              <li className='expandedTile-expanded-list-item'>
                <InnerTile
                  title='Delivery Specialist'
                  state='Open'
                  content1='0 candidates'
                  content2='2 matching resumes'
                  date='Created 16 days ago'
                />
              </li>
              <li className='expandedTile-expanded-list-item'>
                <InnerTile
                  title='Manager'
                  state='Open'
                  content1='14 candidates'
                  content2='46 matching resumes'
                  date='Created 4 days ago'
                />
              </li>
            </ul>
          )}

          {data.title === 'Candidates' && <InnerRows />}

          <div className='icon-right'>
            <Icon size='md' title='<INSERT TITLE HERE>' type='chevron-right' />
          </div>
        </div>
      )}

      {notifications.map((item, index) => {
        if (data.title === item.type) {
          return (
            <TileNotification key={index} tweak={true} onClick={(e: any) => tileStatus(e)} />
          );
        }
      })}
    </div>
  );
};

export default withRouter(ExpandedTile);

//e.stopPropagation();
