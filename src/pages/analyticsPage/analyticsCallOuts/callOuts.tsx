import React from 'react';
import { useDispatch } from 'react-redux';
import './callOuts.scss';
import Button from '@indeed/frontend-components-react/components/Button';
import { withRouter, Link } from 'react-router-dom';
import { AppEvents } from '../../../data/events';

const AnalyticsCallOuts = props => {
  const dispatch = useDispatch();

  const pageGoTo = e => {
    props.history.push('/campaigns');
    dispatch({ type: AppEvents.SET_ACTIVE_ITEM, payload: e });
  };
  return (
    <div className='analyticsCallOuts'>
      <div className='analyticsCallOuts-recommendations'>
        <header className='analyticsCallOuts-recommendations-header'>
          The following 3 jobs are under performing. (0 candidates in the last
          two weeks.)
        </header>
        <ul className='recommendations-list'>
          <li className='recommendations-list-item'>
            <Link className='recommendations-list-item-link' to=''>
              REF210 Cust. Service Rep. — Austin, TX
            </Link>
          </li>
          <li className='recommendations-list-item'>
            <Link className='recommendations-list-item-link' to=''>
              REF184 Customer Service Representative — Austin, TX
            </Link>
          </li>
          <li className='recommendations-list-item'>
            <Link className='recommendations-list-item-link' to=''>
              REF193 Customer Rep. — Austin, TX
            </Link>
          </li>
        </ul>
      </div>
      <div
        className='analyticsCallOuts-recommendations-button'
        onClick={() => pageGoTo('Campaigns')}
      >
        <Button>View campaign recommendations</Button>
      </div>
    </div>
  );
};

export default withRouter(AnalyticsCallOuts);
