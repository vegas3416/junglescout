import React, { useState, useEffect } from 'react';
import './sideBarIcon.scss';
import SubMenu from '../SubMenu/subMenu';

//Fake Data
import MenuOne from '../SubMenu/menuOne.json';

interface IconProp {
  data: IconData;
  isOpen: Boolean;
}

interface IconData {
  logo: String;
  title: String;
}

const SideBarIcon: React.FC<IconProp> = ({ data, isOpen }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className='sideBarIcon'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <img className='icon' src={require(`../../images/${data.logo}`)} />

      <div className='sideBarIcon-title'>
        <span className={`inner ${isOpen ? 'open' : ''}`}>{data.title}</span>
      </div>

      <div className='sideBarMenu'>{visible && <SubMenu data={MenuOne} />}</div>
    </div>
  );
};

export default SideBarIcon;
