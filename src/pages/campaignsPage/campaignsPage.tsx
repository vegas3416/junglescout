import React, { useState } from 'react';
import './campaignsPage.scss';
import CampaignsCallOut from './campaignsCallOut/campaignsCallOut';
import Modal from '@indeed/frontend-components-react/components/Modal';
import Button from '@indeed/frontend-components-react/components/Button';

const CampaignsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [campaignDone, setCampaign] = useState(false);

  return (
    <div className='campaignsPage'>
      {!campaignDone && (
        <div>
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
            <div className='campaignsCallOut'>
              <div className='button1' onClick={() => setShowModal(!showModal)}>
                <span className='button-text'>Review</span>
              </div>
              <div
                className='button2'
                onClick={() => setCampaign(!campaignDone)}
              >
                <span className='button-text'>Create campaign</span>
              </div>
            </div>
          </div>

          <img
            className='campaignsPage-filler3'
            src={require('../../images/campaignsBottom.png')}
          />
        </div>
      )}
      {campaignDone && (
        <div>
          <img
            className='campaignsPage-created'
            src={require('../../images/campaignsCreated.png')}
          />
        </div>
      )}

      <Modal
        closeAriaLabel='close'
        id='modal'
        isOpen={showModal}
        onExit={function onExit() {}}
        title=''
      >
        <div className='modal-buttons'>
          <div>
            <img src={require('../../images/reviewPage.png')} />
          </div>
          <div className='bottom-buttons'>
            <span
              className='cancel-button'
              onClick={() => setShowModal(!showModal)}
            >
              Cancel
            </span>
            <Button
              children='Create campaign'
              buttonType='primary'
              id='previewComponent'
              onClick={() => setCampaign(!campaignDone)}
              size='sm'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CampaignsPage;
