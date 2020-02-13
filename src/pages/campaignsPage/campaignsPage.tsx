import React from 'react';
import './campaignsPage.scss';
import CampaignsCallOut from './campaignsCallOut/campaignsCallOut';
import Modal from '@indeed/frontend-components-react/components/Modal';
import Button from '@indeed/frontend-components-react/components/Button';

const CampaignsPage = () => {
  const onChange = () => {
    console.log('Changed');
  };

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

      <Modal
        closeAriaLabel='close'
        id='modal'
        isOpen={true}
        onExit={function onExit() {}}
        title=''
      >
        <div>
          <img src={require('../../images/reviewPage.png')} />

          <Button
            //@ts-ignore
            buttonType='primary'
            id='previewComponent'
            onClick={function onClick() {
              alert('Primary Button click');
            }}
            size='lg'
          >
            Primary large
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CampaignsPage;
