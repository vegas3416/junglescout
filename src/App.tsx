import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

import './app.scss';
import SideBar from './components/SideBar/sideBar';
import SideJson from './components/SideBar/sideBar.json';
import Profile from './components/widgets/Profile/profile';
import Company from './components/widgets/Company/company';
import TopNavWidgets from './components/widgets/TopNavWdigets/topNavWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from './data/store';
import { AppEvents } from './data/events';

const sideJson = SideJson;

export const App = () => {
  const dispatch = useDispatch();
  const gMobileView = (state: IAppState) => state.homeHub.mobileView;
  const mobileView = useSelector(gMobileView);

  function getWindowDimensions() {
    if (innerWidth < 1000 && !mobileView) {
      console.log('mobileView', mobileView);
      dispatch({ type: AppEvents.SET_MOBILE_VIEW, payload: true });
    } else if (innerWidth > 1000 && mobileView) {
      dispatch({ type: AppEvents.SET_MOBILE_VIEW, payload: false });
    }

    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height
    };
  }

  useEffect(() => {
    function handleResize() {
      getWindowDimensions();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileView]);

  return (
    <div className='container'>
      <div className='topNav'>
        <div className='logo'>
          <Link to='/' aria-label='homePage-icon' role='homePage-icon'>
            <img src={require('./images/indeedI.svg')} />
          </Link>
        </div>
        <div className='search'>
          <input
            className='search-input'
            type='text'
            placeholder='Find jobs, candidates, events...'
          />
          <button className='search-button' type='submit'>
            <img src={require('./images/24px.svg')} />
          </button>
        </div>
        <div className='topNav-right'>
          <div className='topNav-right-list-item'>
            <TopNavWidgets />
          </div>

          <div className='topNav-right-list-item'>
            <Company type='featured' logo='Walgreens.svg' />
          </div>
          <div className='topNav-right-list-item'>
            <Profile logo='Avatar.svg' name='Karim Naguib' title='Recruiter' />
          </div>
        </div>
      </div>
      <div className='details'>
        <SideBar tabs={sideJson} mobileView={mobileView} />
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
