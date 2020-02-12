import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import routes from './routes';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { History } from 'history';

import './app.scss';
import SideBar from './components/SideBar/sideBar';
import SideJson from './components/SideBar/sideBar.json';
import Profile from './components/widgets/Profile/profile';
import Company from './components/widgets/Company/company';
import TopNavWidgets from './components/widgets/TopNavWdigets/topNavWidgets';
import HomeHub from './pages/homeHub/homeHub';

const sideBarJson = SideJson;

export const App = props => {
  const history = History;
  return (
    <div className='container'>
      <div className='topNav'>
        <div className='logo'>
          {/* <a
            className='logo-link'
            
            onClick={() => {}}
            role='homePage-link'
            aria-label='homePage-link'
          > */}
          <Link to="/">
            <img src={require('./images/indeedI.png')} />
          </Link>
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
            <li className='topNav-right-list-item'>
              <TopNavWidgets />
            </li>
            <li className='topNav-right-list-item'>
              <Company type='featured' logo='Walgreens.png' />
            </li>
            <li className='topNav-right-list-item'>
              <Profile
                logo='Avatar.png'
                name='Karim Naguib'
                title='Recruiter'
              />
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
