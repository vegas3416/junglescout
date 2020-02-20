import React, { useState } from 'react';
import './resume.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import Modal from '@indeed/frontend-components-react/components/Modal';
import { useDispatch } from 'react-redux';

import { AppEvents } from '../../data/events';

const ResumePage = props => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const pageGoTo = e => {
    props.history.push('/viewCandidates');
    dispatch({
      type: AppEvents.SET_ACTIVE_ITEM,
      payload: { main: e, sub: 'All Candidates' }
    });
    dispatch({
      type: AppEvents.SET_RESUME_MESSAGE_SENT,
      payload: true
    });
  };

  return (
    <div className='resumePage'>
      <header className='header'>
        <span className='header-label'>Resumes</span>
      </header>
      <img src={require('../../images/resumePage.svg')} />
      <div className='resumePage-bottom'>
        <img
          className='resumePage-bottom'
          onClick={() => setModal(!modal)}
          src={require('../../images/resumePageBottom.svg')}
        />
      </div>
      <Modal
        closeAriaLabel='close'
        id='modal'
        isOpen={modal}
        onExit={function onExit() {}}
        title=''
      >
        <div className='modal-buttons'>
          <div>
            <img src={require('../../images/resumeModal.svg')} />
          </div>
          <div className='bottom-buttons'>
            <span className='cancel-button' onClick={() => setModal(!modal)}>
              Cancel
            </span>
            <Button
              children='Send'
              buttonType='primary'
              id='previewComponent'
              onClick={() => {
                setModal(!modal);
                pageGoTo('Candidates');
              }}
              size='sm'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResumePage;
