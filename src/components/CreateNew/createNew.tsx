import React, { useState, useEffect, useRef } from 'react';
import './createNew.scss';

import SubMenu from '../SubMenu/subMenu';

//Fake Data
import CreateData from '../SideBar/sideBar.json';

interface CreateProp {
  data: CreateData;
  isOpen: Boolean;
  Visible: Function;
}

interface CreateData {
  logo: String;
  title: String;
}

const CreateNew: React.FC<CreateProp> = ({ data, isOpen, Visible }) => {
  const [isVisible, setVisible] = useState(false);
  const onclick = () => {
    setVisible(!isVisible);
    Visible(isVisible);
  };

  const node = useRef();

  useEffect(() => {
    const dropdownClick = () => {
      if (isVisible) setVisible(false);
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
        <span className={`inner ${isOpen ? 'open' : ''}`}>{data.title}</span>
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
