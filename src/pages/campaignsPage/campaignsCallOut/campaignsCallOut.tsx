import React from 'react';
import './campaignsCallOut.scss';
import Button from '@indeed/frontend-components-react/components/Button';

const CampaignsCallOut = () => {
  return (
    <div className='campaignsCallOut'>
      <div className='button1' onClick={() => {}}>
        <span className='button-text'>Review</span>
      </div>
      <div className='button2' onClick={() => {}}>
        <span className='button-text'>Create campaign</span>
      </div>
    </div>
  );
};

export default CampaignsCallOut;
