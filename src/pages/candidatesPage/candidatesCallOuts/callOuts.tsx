import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './callOuts.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import { withRouter, Link } from 'react-router-dom';
import { AppEvents } from '../../../data/events';
import { Types } from '../../../utilities/constants';

const CandidatesCallOuts = props => {
  const dispatch = useDispatch();

  //Bad but for prototype
  const value = '3 low perfoming jobs';

  const { shouldShowCallOut } = props;

  const pageGoTo = e => {
    props.history.push('/campaigns');
    dispatch({ type: AppEvents.SET_ACTIVE_ITEM, payload: e });
    dispatch({ type: AppEvents.CHECK_NOTIFICATIONS, payload: Types.ANALYTICS });
  };
  return (
    <div className='candidatesCallOuts'>
      <header className='candidatesCallOuts-recommendations'>
        <span className='basicText'>
          We haven’t found any qualified candidates quite yet.{' '}
        </span>

        <div className='descriptiveText'>
          <p className='descriptiveText-header'>Search Indeed Resume</p>

          <span>
            With over 6 million resumes updated every month and a 55% total
            response rate, Indeed Resume connects you with quality candidates
            ready for their next career move.
          </span>
        </div>
      </header>

      <div
        className='candidatesCallOuts-recommendations-button'
        onClick={() => pageGoTo('Campaigns')}
      >
        <span
          className='no-thanks-click'
          onClick={e => {
            e.stopPropagation();
            shouldShowCallOut(false);
          }}
        >
          No thanks
        </span>
        <Button children='Search for resumes' type='primary' size='sm' />
      </div>
    </div>
  );
};

export default withRouter(CandidatesCallOuts);
