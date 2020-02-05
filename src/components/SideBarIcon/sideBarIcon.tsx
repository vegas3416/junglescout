import React, { useState, useEffect } from 'react';
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
  return (
    <div className='sideBarIcon'>
      <img className='icon' src={require(`../../images/${data.logo}`)} />

      <div className={`title`}>
        <span className={`inner ${isOpen ? 'open' : ''}`}>{data.title}</span>
      </div>
    </div>
  );
};

export default SideBarIcon;
