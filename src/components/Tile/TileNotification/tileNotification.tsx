import React, { useState } from 'react';
import './tileNotification.scss';

const TileNotification = props => {
  const { onClick, tweak } = props;

  const [isOpen, setIsOpen] = useState(false);

  const showNotification = () => {
    setIsOpen(!isOpen);
    onClick(!isOpen);
  };

  return (
    <div
      className={`tileNotification ${isOpen ? 'open' : ''} ${
        tweak ? 'tweak' : ''
      }`}
    >
      <div className='notification'>
        {tweak ? (
          <span className={`inner ${isOpen ? 'open' : ''}`}>
            No qualified candidates found{' '}
            <span className='strong'>Try Indeed Resume</span>
          </span>
        ) : (
          <span className={`inner ${isOpen ? 'open' : ''}`}>
            You have 2 campaigns that have expired. Learn more
          </span>
        )}

        <div
          className='notification-icon'
          onClick={e => {
            e.stopPropagation();
            showNotification();
          }}
        >
          {isOpen ? (
            <img
              className='closeIcon'
              src={require('../../../images/closeIcon.svg')}
            />
          ) : (
            <img
              className='openIcon'
              src={require('../../../images/notificationSmallIcon.svg')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TileNotification;
