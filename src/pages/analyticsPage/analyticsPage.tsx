import React, { useState, useEffect } from 'react';
import './analyticsPage.scss';
import CallOuts from './analyticsCallOuts/callOuts';
import { useDispatch, useSelector } from 'react-redux';
import { AppEvents } from '../../data/events';
import { Types } from '../../utilities/constants';
import { IAppState } from '../../data/store';

const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const [buttonShow, setButtonShow] = useState(true);

  const gNotifications = (state: IAppState) => state.homeHub.notifications;
  const notifications = useSelector(gNotifications);

  const shouldShowCallOut = e => {
    dispatch({ type: AppEvents.CHECK_NOTIFICATIONS, payload: Types.ANALYTICS });
    setButtonShow(e);
  };

  useEffect(() => {
    const result = notifications.some(item => item['type'] === Types.ANALYTICS);
    setButtonShow(result);
  }, []);

  return (
    <div className='analyticsPage'>
      <img
        className='analyticsPage-filler'
        src={require('../../images/analyticsTop.svg')}
      />
      {buttonShow && (
        <CallOuts shouldShowCallOut={(e: boolean) => shouldShowCallOut(e)} />
      )}

      <img
        className='analyticsPage-filler2'
        src={require('../../images/analyticsBottom.svg')}
      />
    </div>
  );
};

export default AnalyticsPage;
