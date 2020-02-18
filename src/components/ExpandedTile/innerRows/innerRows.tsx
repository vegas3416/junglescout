import React from 'react';
import './innerRows.scss';
import UserContent from './userContent/userContent';

const InnerRows = () => {
  return (
    <div className='innerRows'>
      <header className='header-main'>
        Top matching profiles for{' '}
        <span className='header-strong'>Customer Service Representative</span>
      </header>
      <div>
        <ul>
          <li className='user-content'>
            <UserContent
              name='Jonathan Gomez'
              info='previously a Security Guard in Austin, TX'
              requirements={true}
              keywords={true}
              date='Applied Feb. 5'
            />
          </li>
          <li className='user-content'>
            <UserContent
              name='Luis Cava'
              info='in Austin, TX'
              requirements={true}
              keywords={true}
              date='Applied Feb. 5'
            />
          </li>
          <li className='user-content'>
            <UserContent
              name='Bo Broadway'
              info='previously a Customer Service Representative in Waco, TX'
              requirements={true}
              keywords={true}
              date='Applied Feb. 6'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnerRows;
