import React, { useState } from 'react';
import './sideBar.scss';
import SideBarIcon from '../SideBarIcon/sideBarIcon';

export interface IProps {
  tabs: Array<any>;
}

const SideBar: React.FC<IProps> = ({ tabs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : 'closed'}`}
      onClick={() => updateIsOpen()}
    >
      {tabs.map((data, index) => {
        return <SideBarIcon key={index} data={data} isOpen={isOpen}/>;
      })}

      {/* <div className='collapse-button' onClick={() => updateLeftNav()}>
        <span className={`${leftNav ? 'enabled' : ''}`}></span>
      </div> */}
    </div>
  );
};

export default SideBar;
