import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './app.scss';
import SideBar from './components/SideBar/sideBar';
import SideJson from './components/SideBar/sideBar.json';
import DropdownNavHeader from './components/DropdownNavHeader';

const sideBarJson = SideJson;

const App = () => {
  return (
    <div className='container'>
      <DropdownNavHeader navSetup='dropdownNav' />
      <SideBar tabs={sideBarJson}/>
    </div>
  );
};

export default App;
