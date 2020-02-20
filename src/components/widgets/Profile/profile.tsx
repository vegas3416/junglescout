import React, { useState } from 'react';
import './profile.scss';

import ProfileData from './mvpProfileItems.json';

interface ProfileProps {
  //Profile logo will probably be an image from
  logo?: String;
  name: String;
  title?: String;
  mobileView?: boolean;
}

const Profile: React.FC<ProfileProps> = props => {
  const { logo, name, title, mobileView } = props;

  const [menuState, setMenuState] = useState(false);

  const profileData = ProfileData;

  return (
    <div
      className='profile'
      onClick={() => {
        setMenuState(!menuState);
      }}
    >
      {logo && <img className={`${mobileView ? 'mobileAvatar' : ''}`} src={require(`../../../images/${logo}`)} />}
      {!mobileView && (
        <div className='profile-labels'>
          <span className='name'>{name}</span>
          <span className='title'>{title}</span>
        </div>
      )}
      {menuState ? (
        <ul className={`profile-dropdown-content ${mobileView ? 'mobileView' : ''}`}>
          {profileData.profilemenu.map((menuItem, index) => {
            //This is setup in a way that would read
            if (menuItem.link) {
              return (
                <li key={index} className={`content ${menuItem.link}`}>
                  {menuItem.name}
                </li>
              );
            } else if (
              menuItem.title === 'user' ||
              menuItem.title === 'title'
            ) {
              return (
                <li key={index} className={`content ${menuItem.title} `}>
                  <span>{menuItem.name}</span>
                </li>
              );
            } else {
              return (
                <li
                  key={index}
                  className={`content ${menuItem.title} ${menuItem.icon}`}
                >
                  <a className='menu-item-link'>
                    <div>{menuItem.name}</div>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Profile;
