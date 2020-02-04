import React, { useState, useEffect, useRef } from 'react';
//import IndeedLogo from '@indeed/frontend-components-react/components/IndeedLogo';
import './style/dropdownNavHeader.scss';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '../MenuItem/menuItem';
//import * as TYPES from 'Src/actions/types';
//import Icon from '@indeed/frontend-components-react/components/Icon';
import classNames from 'classnames';

//import NavData from 'Src/jsonData/menuItems.json';
import MVPData from './mvpItems.json';

const DropdownNavHeader = props => {
  const dispatch = useDispatch();
  //const navLocation = useSelector(state => state.indeedCentral.navLocation);
  const activeItem = null;
  //useSelector(
  // state => state.indeedCentral.navMenuActiveItem
  //);
  const {
    appName,
    homeUrl,
    homeClickAction,
    navSetup,
    updatePageToShow
  } = props;

  const [isOpen, setMenuState] = useState(false);

  const navData = MVPData; //NavData;
  const node = useRef();

  const navName = classNames(`${navSetup}`);

  // useEffect(() => {
  //     if (navLocation !== 'expandingTopNav' && navLocation !== 'leftNav') {
  //         setExpandingNav(false);
  //         setLeftNav(false);
  //     } else if (navLocation === 'leftNav') {
  //         setLeftNav(true);
  //     }
  // }, [navLocation]);

  const homeClickHandler = event => {
    event.preventDefault();
    homeClickAction(event);
  };

  const toggleActive = e => {
    const menuItem = e;
    //dispatch({ type: TYPES.SET_NAV_ACTIVE_ITEM, payload: menuItem });
  };

  const displayDropdownHeader = display => {
    if (display) {
      return (
        <div className='dropdownNavHeader-enco-nav-directory'>
          <div className='nav-titles'>
            {navData.map((navItem, index) => {
              return (
                <MenuItem
                  key={index}
                  navItem={navItem}
                  isActive={activeItem === navItem.navItem}
                  activeItem={activeItem}
                  handleActive={e => toggleActive(e)}
                  updatePageToShow={updatePageToShow}
                />
              );
            })}
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    const dropdownClick = e => {
      let isTarget = e.target;
      isTarget = isTarget.classList.contains('menu-item-profile-icon');

      //console.log(`target: ${isTarget} ${isOpen}`);
      if (isOpen && !isTarget) {
        setMenuState(false);
      }
    };

    document.addEventListener('mouseup', dropdownClick);
    return () => {
      document.removeEventListener('mouseup', dropdownClick);
    };
  }, [isOpen]);

  return (
    <div>
      <div className='dropdownNavHeader'>
        <div className='dropdownNavHeader-logo'>
          <a
            className='dropdownNavHeader-logo-link'
            href={homeUrl}
            onClick={
              typeof homeClickAction !== 'undefined'
                ? event => homeClickHandler(event)
                : null
            }
            role='homePage-link'
            aria-label='homePage-link'
          >
            {/* This is where I need to do the drop down checks here */}
            {/* <IndeedLogo size='medium' type='wordmark' inverted /> */}

            {appName && (
              <span className='dropdownNavHeader-logo-appname'>
                {' '}
                {appName}{' '}
              </span>
            )}
          </a>
        </div>

        {navSetup === 'dropdownNav' ? displayDropdownHeader(true) : ''}

        <div className='dropdownNavHeader-right-menu'>
          {/* TODO: Route contact button to destination */}

          {/* <div className="dropdownNavHeader-right-menu-item">
                        <span className="question-icon">
                            <Icon
                                className="menu-item-question-icon"
                                name="question"
                                height="2rem"
                                width="2rem"
                            />
                        </span>
                    </div> */}

          <div className='dropdownNavHeader-right-menu-item company-name'>
            Maxim Healthcare
          </div>

          {/* <div className="dropdownNavHeader-right-menu-item messaging-inbox">
                        <span className="messaging-counter">2</span>
                    </div> */}

          <div
            className={`dropdownNavHeader-right-menu-item profile-icon ${
              isOpen ? 'isOpen' : ''
            }`}
            onClick={() => {
              setMenuState(!isOpen);
            }}
            ref={node}
          >
            <span className='profile-icon-item'>
              {/* <Icon
                className='menu-item-profile-icon'
                name='profile'
                height='2rem'
                width='1.5rem'
              /> */}
            </span>
            <div className='profile-icon-dropdown'>
              <ul className='profile-icon-dropdown-content'>
                {navData &&
                  navData.map(menuItem => {
                    if (menuItem.profile) {
                      return menuItem.profilemenu.map((item, index) => {
                        return (
                          <li
                            className={`menu-item ${item.icon} ${item.title} ${item.link} ${item.color}`}
                            key={index}
                          >
                            <span className='menu-item-text'>{item.name}</span>
                          </li>
                        );
                      });
                    }
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DropdownNavHeader.defaultProps = {
  appName: '',
  homeUrl: '/.'
};

export default DropdownNavHeader;
