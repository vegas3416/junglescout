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

interface IconProp extends RouteComponentProps<any> {
  data: IconData;
  sideBarOpen?: boolean;
  createNewBarOpen?: boolean;
  index: number;
  history: History;
}

interface IconData {
  logo: string;
  title: string;
  page: string;
  notification: boolean;
}

const IconTitle: React.FC<IconProp> = ({
  data,
  sideBarOpen,
  createNewBarOpen,
  index,
  history
}) => {
  const dispatch = useDispatch();
  const stateActiveItem = (state: IAppState) => state.homeHub.activeItem;
  const activeItem = useSelector(stateActiveItem);

  const [visible, setVisible] = useState(false);

  const iconHomePage = () => {
    return history.push(`/${data.page}`);
  };

  const handleActiveItem = (icon: string) => {
    dispatch({ type: AppEvents.SET_ACTIVE_ITEM, payload: icon });
  };

  return (
    <div
      className={`iconTitle ${activeItem === data.title ? 'active' : ''} ${
        data.title === 'Home' ? 'home' : ''
      }`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => {
        handleActiveItem(data.title);
        iconHomePage();
      }}
    >
      {data.notification && <span className='iconTitle-notification'></span>}
      <img className='icon' src={require(`../../images/${data.logo}`)} />

      <div className='iconTitle-title'>
        <span className={`inner ${sideBarOpen ? 'sideBarOpen' : ''}`}>
          {data.title}
        </span>
      </div>

      <div className='iconTitleMenu'>
        {visible && !createNewBarOpen && subMenu[index].submenu && (
          <SubMenu data={subMenu[index].submenu} />
        )}
      </div>
    </div>
  );
};

export default withRouter(IconTitle);
