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
      <div
        className='jobsTemplates-createJob'
        onClick={() => {
          props.history.push('/jobs/jobsTemplates/createJobTemplate');
        }}
      >
        <img
          className='jobsTemplates-createJob'
          src={require('../../images/jobTemplatesHeader.svg')}
        />
      </div>
      <div
        className='jobsTemplates-shareIcon'
        onClick={() => setShowModal(!showModal)}
      >
        {createTemplate ? (
          <img
            className={`jobsTemplates-content-image `}
            src={require('../../images/jobTemplatesNew.svg')}
          />
        ) : (
          <img
            className='jobsTemplates-content-image'
            src={require('../../images/jobTemplatesBottom.svg')}
          />
        )}
      </div>

      <Modal
        closeAriaLabel='close'
        id='modal'
        isOpen={showModal}
        onExit={() => setShowModal(!showModal)}
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
