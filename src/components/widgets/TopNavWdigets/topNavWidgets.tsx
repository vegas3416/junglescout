import React from 'react';
import './topNavWidgets.scss';

interface QuickProps {
  //Profile logo will probably be an image from
  //items: Array<any>;
}

const TopNavWidgets: React.FC<QuickProps> = props => {
  //const { items } = props;

  return (
    <div className='topNavWidgets'>
      <ul className='widget-list'>
        <li className='widget-list-item'>
          <img src={require('../../../images/questionMarkIcon.svg')} />
        </li>
        <li className='widget-list-item'>
          <img src={require('../../../images/notificationIcon.svg')} />
        </li>
        <li className='widget-list-item'>
          <img src={require('../../../images/messages.svg')} />
        </li>
      </ul>
    </div>
  );
};

export default TopNavWidgets;
