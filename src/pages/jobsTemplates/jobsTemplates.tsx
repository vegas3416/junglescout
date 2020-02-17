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
            src={require('../../images/jobTemplatesNew.png')}
          />
        ) : (
          <img
            className='jobsTemplates-content-image'
            src={require('../../images/jobsTemplates.png')}
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
          <img
            className='shareIcon-button'
            onClick={() => setShowModal(!showModal)}
            src={require('../../images/shareIcon.png')}
          />
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
            <img src={require('../../images/shareTemplate.png')} />
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
