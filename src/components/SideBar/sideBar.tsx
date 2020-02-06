import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './sideBar.scss';
import SideBarIcon from '../SideBarIcon/sideBarIcon';
import CreateNew from '../CreateNew/createNew';
import * as TYPES from '../../data/types';

export interface IProps {
  tabs: Array<any>;
}

const SideBar: React.FC<IProps> = ({ tabs }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // const toggleActive = e => {
  //   const menuItem = e;
  //   dispatch({ type: TYPES.SET_ACTIVE_ITEM, payload: menuItem });
  // };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul className='sidebar-list'>
        {tabs.map((data, index) => {
          return (
            <li key={index}>
              {data.type === '0' ? (
                <CreateNew data={data} isOpen={isOpen} />
              ) : (
                <SideBarIcon data={data} isOpen={isOpen} />
              )}
            </li>
          );
        })}
      </ul>

      {/* <div className='collapse-button' onClick={() => updateLeftNav()}>
  <span className={`${leftNav ? 'enabled' : ''}`}></span>
</div> */}
      <div>
        <img
          className={`expand-collapse-button ${isOpen ? 'open' : ''}`}
          onClick={() => updateIsOpen()}
          src={require('../../images/doubleArrow.png')}
        />
      </div>
    </div>
  );
};

export default SideBar;
