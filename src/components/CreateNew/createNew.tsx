import React, { useState, useEffect, useRef } from 'react';
import './createNew.scss';

import SubMenu from '../SubMenu/subMenu';

//Fake Data
import CreateData from '../SideBar/sideBar.json';
import { useDispatch, useSelector } from 'react-redux';
import { AppEvents } from '../../data/events';
import { IAppState } from '../../data/store';

interface CreateProp {
  data: CreateData;
  sideBarOpen: Boolean;
}

interface CreateData {
  logo: String;
  title: String;
}

const CreateNew: React.FC<CreateProp> = ({ data, sideBarOpen }) => {
  const dispatch = useDispatch();

  const createIsOpen = (state: IAppState) => state.homeHub.createIsOpen;
  const isVisible = useSelector(createIsOpen);

  const onclick = () => {
    dispatch({ type: AppEvents.SET_CREATE_NEW_IS_OPEN, payload: !isVisible });
  };

  useEffect(() => {
    const dropdownClick = () => {
      if (isVisible) {
        dispatch({
          type: AppEvents.SET_CREATE_NEW_IS_OPEN,
          payload: false
        });
      }
    };

    document.addEventListener('click', dropdownClick);
    return () => {
      document.removeEventListener('click', dropdownClick);
    };
  }, [isVisible]);

  return (
    <div className='createNew' onClick={() => onclick()}>
      <img className='icon' src={require(`../../images/${data.logo}`)} />

      <div className='createNew-title'>
        <span className={`inner ${sideBarOpen ? 'sideBarOpen' : ''}`}>{data.title}</span>
      </div>

      <div className='sideBarMenu'>
        {isVisible && (
          <SubMenu data={CreateData[0].submenu} advancedMenu={true} />
        )}
      </div>
    </div>
  );
};

export default CreateNew;
