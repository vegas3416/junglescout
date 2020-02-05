import React from 'react';
import './sideBarIcon.scss';

interface IconProp {
  data: IconData;
  isOpen: Boolean;
}

interface IconData {
  logo: HTMLImageElement;
  title: String;
}

const SideBarIcon: React.FC<IconProp> = ({ data, isOpen }) => {
  console.log('isOpen: ', isOpen);
  return (
    <div className='sideBarIcon'>
      <img className='icon' src={require(`../../images/${data.logo}`)} />
      {isOpen && (
        <span className={`${isOpen ? 'title-open' : 'title-closed'}`}>{data.title}</span>
      )}
    </div>
  );
};

export default SideBarIcon;
