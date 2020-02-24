import React, { useState } from 'react';
import './jobsTemplates.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import Modal from '@indeed/frontend-components-react/components/Modal';
import { IAppState } from '../../data/store';
import { useSelector } from 'react-redux';

const JobsTemplates = props => {
  const [showModal, setShowModal] = useState(false);
  const gCreateTemplate = (state: IAppState) => state.homeHub.createTemplate;
  const createTemplate = useSelector(gCreateTemplate);

  const [sendIcon, setSendIcon] = useState(false);

  const showSendIcon = () => {
    setSendIcon(!sendIcon);
    resetSendView();
  };

  const resetSendView = () => {
    setTimeout(() => setSendIcon(false), 5000);
  };

  return (
    <div className='jobsTemplates'>
      {sendIcon && (
        <div className='sent-view'>
          <span className='sent-view-content'>
            Success! The Customer Service Representative template has been
            shared with NE Branch Managers.
          </span>
        </div>
      )}

      <header className='header'>
        <span className='header-label'>Jobs templates</span>
      </header>
      <div className='jobsTemplates-content'>
        {createTemplate ? (
          <img
            className='jobsTemplates-content-image'
            src={require('../../images/jobTemplatesNew.svg')}
          />
        ) : (
          <img
            className='jobsTemplates-content-image'
            src={require('../../images/jobsTemplates.svg')}
          />
        )}

        <div className='shareIcon'>
          <Button
            className='button'
            children='Create Job Template'
            buttonType='tertiary'
            size='md'
            onClick={() => {
              props.history.push('/jobs/jobsTemplates/createJobTemplate');
            }}
          />

          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='shareIcon-button'
            onClick={() => setShowModal(!showModal)}
          >
            <rect
            className="share-fill-rect"
              x='1'
              y='1'
              width='30'
              height='30'
              rx='15'
              fill='white'
              stroke='#ECECEC'
              stroke-width='2'
            />
            <path
            //className="share-fill-rect"
              d='M18.0003 12V10.41C18.0003 9.52002 19.0803 9.07002 19.7103 9.70002L24.3003 14.29C24.6903 14.68 24.6903 15.31 24.3003 15.7L19.7103 20.29C19.0803 20.92 18.0003 20.48 18.0003 19.59V17.9C13.0003 17.9 9.50027 19.5 7.00027 23C8.00027 18 11.0003 13 18.0003 12Z'
              fill='#085FF7'
            />
          </svg>
        </div>
      </div>

      <Modal
        closeAriaLabel='close'
        id='modal'
        isOpen={showModal}
        onExit={function onExit() {}}
        title=''
      >
        <div className='modal-buttons'>
          <div>
            <img src={require('../../images/shareTemplate.svg')} />
          </div>
          <div className='bottom-buttons'>
            <span
              className='cancel-button'
              onClick={() => setShowModal(!showModal)}
            >
              Cancel
            </span>
            <Button
              children='Send'
              buttonType='primary'
              id='previewComponent'
              onClick={() => {
                setShowModal(!showModal);
                showSendIcon();
              }}
              size='sm'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobsTemplates;
