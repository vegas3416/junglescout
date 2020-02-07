import React from 'react';
import './subMenu.scss';

interface SMProps {
  data: Array<any>;
  advancedMenu?: Boolean;
}

const SubMenu: React.FC<SMProps> = ({ data, advancedMenu }) => {
  return (
    <ul className={`subMenu ${advancedMenu ? 'advanced' : ''}`}>
      {data.map((item, index) => {
        return (
          <li key={index} className='subMenu-item'>
            <a className='subMenu-item-link' href='/'>
              {advancedMenu && (
                <img
                  className='logo'
                  src={require(`../../images/${item.logo}`)}
                />
              )}
              <span className={`label ${advancedMenu ? 'advanced' : ''}`}>
                {advancedMenu ? item.title : item}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
