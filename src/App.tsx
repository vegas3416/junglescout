import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './app.scss';
import SideBar from './components/SideBar/sideBar';
import SideJson from './components/SideBar/sideBar.json';

import IndeedLogo from '@indeed/frontend-components-react/components/IndeedLogo';

const sideBarJson = SideJson;

const App = () => {
  return (
    <div className='container'>
      <div className='topNav'>
        <div className='logo'>
          <a
            className='logo-link'
            href='/'
            onClick={() => {}}
            role='homePage-link'
            aria-label='homePage-link'
          >
            <img src={require('./images/indeedI.png')} />
          </a>
        </div>
      </div>
      <SideBar tabs={sideBarJson} />
    </div>
  );
};

export default App;
