import React from 'react';
import './analyticsPage.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CallOuts from './analyticsCallOuts/callOuts';

const AnalyticsPage = () => {
  return (
    <div className='analyticsPage'>
      <header className='analyticsPage-header'>Analytics</header>
      <CallOuts />
      <div>Dashboard</div>
    </div>
  );
};

export default withRouter(AnalyticsPage);
