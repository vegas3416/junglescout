import React from 'react';
import './userContent.scss';

const UserContent = props => {
  const { name, info, requirements, keywords, date } = props;

  const requirementsMatch = () => {
    return <span className='matches'>Matches all requirements</span>;
  };

  const keywordsMatch = () => {
    return <span className='matches'>Matches all keywords</span>;
  };

  return (
    <div className='userContent'>
      <div className='user'>
        <span className='user-title'>{name}</span>
        {' - '}
        <span className='user-info'>{info}</span>
      </div>
      <div className='quickLook'>
        <div className='quickLook-item'>
          {requirements ? requirementsMatch() : null}
        </div>
        <div className='quickLook-item'>
          {keywords ? keywordsMatch() : null}
        </div>

        <span className='date'>{date}</span>
      </div>
    </div>
  );
};

export default UserContent;
