import React, { useState } from 'react';
import './analyticsPage.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CallOuts from './analyticsCallOuts/callOuts';

const AnalyticsPage = () => {
  const [buttonShow, setButtonShow] = useState(true);

  const shouldShowCallOut = (e) => {
    setButtonShow(e);
  };

  return (
    <div className='analyticsPage'>
      <img
        className='analyticsPage-filler'
        src={require('../../images/analyticsTop.png')}
      />
      {buttonShow && (
        <CallOuts shouldShowCallOut={(e: boolean) => shouldShowCallOut(e)} />
      )}

      <img
        className='analyticsPage-filler2'
        src={require('../../images/analyticsBottom.png')}
      />
    </div>
  );
};

export default AnalyticsPage;
