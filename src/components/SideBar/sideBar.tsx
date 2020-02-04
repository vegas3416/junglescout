import React, { useState } from 'react';
import './sideBar.scss';
import Tile from '../Tile';

export interface IProps {
  tabs: Array<any>;
}

const SideBar: React.FC<IProps> = ({ tabs }) => {
  const [leftNav, setLeftNav] = useState(false);

  const updateLeftNav = () => {
    setLeftNav(!leftNav);
  };

  return (
    <div className={`sidebar ${leftNav ? 'open' : 'closed'}`}>
      {tabs.map((item, index) => {
        return <Tile key={index} data={item} open={leftNav} />;
      })}

      <div className='collapse-button' onClick={() => updateLeftNav()}>
        <span className={`${leftNav ? 'enabled' : ''}`}></span>
      </div>
    </div>
  );
};

export default SideBar;
