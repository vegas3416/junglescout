import React, { useState } from 'react';
import './createNew.scss';

import SubMenu from '../SubMenu/subMenu';

//Fake Data
import MenuOne from '../SubMenu/menuOne.json';

interface CreateProp {
  data: CreateData;
  isOpen: Boolean;
}

interface CreateData {
  logo: String;
  title: String;
}

const CreateNew: React.FC<CreateProp> = ({ data, isOpen }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className='createNew'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <img className='icon' src={require(`../../images/${data.logo}`)} />

      <div className='createNew-title'>
        <span className={`inner ${isOpen ? 'open' : ''}`}>{data.title}</span>
      </div>

      <div className='sideBarMenu'>{visible && <SubMenu data={MenuOne} />}</div>
    </div>
  );
};

export default CreateNew;
