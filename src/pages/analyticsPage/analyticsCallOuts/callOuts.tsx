import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './callOuts.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import { withRouter, Link } from 'react-router-dom';
import { AppEvents } from '../../../data/events';
import { Types } from '../../../utilities/constants';

const AnalyticsCallOuts = props => {
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
    <div className='analyticsCallOuts'>
      <header className='analyticsCallOuts-recommendations'>
        <span className='basicText'>
          We’ve identified <span className='redText'>{value}</span>. These jobs
          have had <span className='boldedText'>0</span> new candidates in the
          last two weeks. We have created a new campaign recommendation to help
          you better source for these roles.
        </span>
      </header>

      <div
        className='analyticsCallOuts-recommendations-button'
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
        <Button>View campaign recommendations</Button>
      </div>
    </div>
  );
};

export default withRouter(AnalyticsCallOuts);
