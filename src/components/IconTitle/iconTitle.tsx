import React, { useState, useEffect } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import './iconTitle.scss';
import SubMenu from '../SubMenu/subMenu';
import { pageLocation } from '../../utilities/helperFunctions';

//Fake Data
import subMenu from '../SideBar/sideBar.json';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from 'redux-promise-middleware';
import { AppEvents } from '../../data/events';
import { IAppState } from '../../data/store';
import { History } from 'history';
import { ArrayProps } from '../SideBar/sideBar';

interface IconProp extends RouteComponentProps<any> {
  data: ArrayProps;
  sideBarOpen?: boolean;
  createNewBarOpen?: boolean;
  index: number;
  history: History;
  showMobileSideBar: boolean;
  user: string;
}

interface IconData {
  logo: string;
  title: string;
  page?: string;
}

const IconTitle: React.FC<IconProp> = ({
  data,
  sideBarOpen,
  createNewBarOpen,
  index,
  history,
  showMobileSideBar,
  user
}) => {
  const dispatch = useDispatch();
  const stateActiveItem = (state: IAppState) => state.homeHub.activeItem;
  const activeItem = useSelector(stateActiveItem);

  const gNotifications = (state: IAppState) => state.homeHub.notifications;
  const notifications = useSelector(gNotifications);

  const [visible, setVisible] = useState(false);

  const iconHomePage = () => {
    return history.push(`/${data.page}`);
  };

  const handleActiveItem = (icon: string) => {
    let subItem = '';
    if (data.submenu) {
      data.submenu.some(item => {
        if (item['page'] === data.page) {
          subItem = item.title;
        }
      });
    }

    console.log('notifications : ', notifications.length);
    data.logo
      ? dispatch({
          type: AppEvents.SET_ACTIVE_ITEM,
          payload: { main: icon, sub: subItem }
        })
      : notifications.length === 0 && data.title === 'Manager'
      ? (dispatch({
          type: AppEvents.RESET_NOTIFICATION,
          payload: [{ type: 'Analytics' }]
        }),
        dispatch({ type: AppEvents.SET_USER, payload: data.title }))
      : dispatch({ type: AppEvents.SET_USER, payload: data.title });
  };

  return (
    <div
      className={`iconTitle ${
        activeItem?.main === data.title ? 'active' : ''
      } ${data.title === 'Home' ? 'home' : ''}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => {
        handleActiveItem(data.title);
        iconHomePage();
      }}
    >
      {notifications.map((item, index) => {
        if (
          (data.title === 'Analytics' && user === 'Manager' && item.type === data.title) ||
          (data.title === 'Jobs' && user === 'Recruiter')
        ) {
          return <span key={index} className='iconTitle-notification'></span>;
        }
      })}
      {data.logo && (
        <img className='icon' src={require(`../../images/${data.logo}`)} />
      )}

      <div className='iconTitle-title'>
        <span
          className={`inner ${
            sideBarOpen || showMobileSideBar ? 'sideBarOpen' : ''
          }`}
        >
          {data.title}
        </span>
      </div>

      {data.logo && (
        <div className='iconTitleMenu'>
          {visible && !createNewBarOpen && subMenu[index].submenu && (
            <SubMenu
              data={subMenu[index].submenu}
              parentTitle={data.title}
              activeItem={activeItem}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default withRouter(IconTitle);
