import React, { useState } from 'react';
import './tileNotification.scss';

const TileNotification = props => {
  const { onClick } = props;

  const [isOpen, setIsOpen] = useState(false);

  const showNotification = () => {
    setIsOpen(!isOpen);
    onClick(!isOpen);
  };

  return (
    <div className={`tileNotification ${isOpen ? 'open' : ''}`}>
      <div className='notification'>
        {/* <div className='notification-title'>
          <span className={`inner ${isOpen ? 'open' : ''}`}>
            You have 2 campaigns that have expired. Learn more
          </span>
        </div> */}

        <span className={`inner ${isOpen ? 'open' : ''}`}>
          You have 2 campaigns that have expired. Learn more
        </span>

        <div
          className='notification-icon'
          onClick={e => {
            e.stopPropagation();
            showNotification();
          }}
        >
          <img src={require('../../../images/notificationIcon.png')} />
        </div>
      </div>
    </div>
  );
};

export default TileNotification;
