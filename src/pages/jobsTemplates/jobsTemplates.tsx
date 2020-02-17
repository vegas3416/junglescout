import React from 'react';
import './jobsTemplates.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import { IAppState } from '../../data/store';
import { useSelector } from 'react-redux';

const JobsTemplates = props => {
  const gCreateTemplate = (state: IAppState) => state.homeHub.createTemplate;
  const createTemplate = useSelector(gCreateTemplate);

  return (
    <div className='jobsTemplates'>
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

        <Button
          className='button'
          children='Create Job Template'
          buttonType='tertiary'
          size='md'
          onClick={() => {
            props.history.push('/jobs/jobsTemplates/createJobTemplate');
          }}
        />
      </div>
    </div>
  );
};

export default JobsTemplates;
