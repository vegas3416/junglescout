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
  const mobileViews = useSelector(gMobileView);

  const gUser = (state: IAppState) => state.homeHub.user;
  const user = useSelector(gUser);

  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  console.log('MobileView in app: ', mobileViews);

  function getWindowDimensions() {
    if (innerWidth < 1000 && !mobileViews) {
      dispatch({ type: AppEvents.SET_MOBILE_VIEW, payload: true });
    } else if (innerWidth > 1000 && mobileViews) {
      dispatch({ type: AppEvents.SET_MOBILE_VIEW, payload: false });
      setShowMobileSideBar(false);
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
  }, [mobileViews]);

  return (
    <div className='container'>
      <div className='topNav'>
        {mobileViews && (
          <svg
            className='hamburger-menu'
            onClick={() => setShowMobileSideBar(!showMobileSideBar)}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z'
              fill='white'
            />
          </svg>
        )}
        <div className={`logo ${mobileViews ? 'mobile' : ''}`}>
          <Link to='/' aria-label='homePage-icon' role='homePage-icon'>
            <img src={require('./images/indeedI.svg')} />
          </Link>
        </div>
        {!mobileViews && (
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
        )}

        <div className='topNav-right'>
          <div className={`topNav-right-item ${mobileViews ? 'remove' : ''}`}>
            <TopNavWidgets />
          </div>

          <div className={`topNav-right-item ${mobileViews ? 'remove' : ''}`}>
            <Company
              type={`${user === 'Recruiter' ? 'featured' : ''}`}
              logo={
                user === 'Manager'
                  ? 'managerLogo.svg'
                  : user === 'Recruiter'
                  ? 'recruiterLogo.svg'
                  : 'adminLogo.svg'
              }
            />
          </div>
          <div className='topNav-right-item'>
            <Profile
              logo={
                user === 'Manager'
                  ? 'manager.svg'
                  : user === 'Recruiter'
                  ? 'recruiter.svg'
                  : 'admin.svg'
              }
              name={
                user === 'Manager'
                  ? 'Ann Miles'
                  : user === 'Recruiter'
                  ? 'Karim Naguib'
                  : 'Dianne Black'
              }
              title={
                user === 'Manager'
                  ? 'Manager'
                  : user === 'Recruiter'
                  ? 'Recruiter'
                  : 'Admin'
              }
              mobileViewtt={mobileViews}
            />
          </div>
        </div>
      </div>
      <div className='details'>
        <SideBar
          tabs={sideJson}
          mobileView={mobileViews}
          showMobileSideBar={showMobileSideBar}
        />
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
