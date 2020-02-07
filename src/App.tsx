import React, { useState, useEffect, Suspense } from 'react';
import {
  Router,
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  Link
} from 'react-router-dom';
import { useLocation } from 'react-router';
import routes from './routes';
import { useSelector, useDispatch } from 'react-redux';

import './app.scss';
import SideBar from './components/SideBar/sideBar';
import SideJson from './components/SideBar/sideBar.json';

const sideBarJson = SideJson;

const App = props => {
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
        <div className='search'>
          <input
            className='search-input'
            type='text'
            placeholder='Find jobs, candidates, events...'
          />
          <button className='search-button' type='submit'>
            <img src={require('./images/24px.png')} />
          </button>
        </div>
        <div className='topNav-right'>
          <ul className='topNav-right-list'>
            <li>help</li>
            <li> notifications</li>
            <li> messaging</li>
            <li>company name</li>
            <li>
              <div className='profile'>
                <img src={require('./images/Avatar.png')} />
                <div className='profile-labels'>
                  <span className="name">Karim Naguib</span>
                  <span className="title">Recruiter</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='details'>
        <SideBar tabs={sideBarJson} />
        <div className='details_view'>
          <Switch>
            {routes.map(ea => {
              return <Route key={ea.path} {...ea} />;
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
