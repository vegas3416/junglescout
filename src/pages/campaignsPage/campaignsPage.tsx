import React from 'react';
import './campaignsPage.scss';
import CampaignsCallOut from './campaignsCallOut/campaignsCallOut';

const CampaignsPage = () => {
  return (
    <div className='campaignsPage'>
      <img
        className='campaignsPage-filler'
        src={require('../../images/campaignsTop.png')}
      />
      <img
        className='campaignsPage-filler2'
        src={require('../../images/campaignsTop2.png')}
      />
      <div className='campaignsPage-filler22'>
        <img
          className='campaignsPage-filler222'
          src={require('../../images/campaignsButton.png')}
        />
        <CampaignsCallOut />
      </div>

      <img
        className='campaignsPage-filler3'
        src={require('../../images/campaignsBottom.png')}
      />

      <div className='modal'>
        <div className='modal-content'>
          <img src={require('../../images/reviewPage.png')} />
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
