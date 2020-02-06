import React from 'react';
import './subMenu.scss';

interface SMProps {
  data: Array<String>;
}

const SubMenu: React.FC<SMProps> = ({ data }) => {
  
  return (
    <ul className='subMenu'>
      {data.map((item, index) => {
        return (
          <li key={index} className='subMenu-item'>
            <span className="label">{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
