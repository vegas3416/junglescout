import React from 'react';
import './createJobTemplate.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import { useDispatch } from 'react-redux';
import { AppEvents } from '../../data/events';

const CreateJobTemplate = props => {
  const dispatch = useDispatch();

  return (
    <div className='createJobTemplate'>
      <header className='header'>
        <span className='header-label'>Create job template</span>
      </header>
      <div
        className='createJobTemplate-content'
        onClick={() => {
          dispatch({
            type: AppEvents.SET_CREATE_TEMPLATE,
            payload: true
          });
          props.history.push('/jobs/jobsTemplates');
        }}
      >
        <img
          className='createJobTemplate-content-image'
          src={require('../../images/createJobTemplate.svg')}
        />
        {/* <Button
          className='button'
          children='Create Job Template'
          buttonType='tertiary'
          size='md'
        /> */}
      </div>
    </div>
  );
};

export default CreateJobTemplate;
