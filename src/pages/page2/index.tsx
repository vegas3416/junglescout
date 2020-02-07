import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router';
import './addUsers.scss';
//import BoxSelector from '../../components/boxSelector';
// import Progressbar from 'Src/components/Progressbar/index.jsx';
// import routes from 'Src/routes';
//import * as TYPES from 'Src/actions/types';
import { useDispatch } from 'react-redux';

import CheckboxStandalone from '@indeed/frontend-components-react/components/Forms/CheckboxStandalone';

const Page = props => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

  const [manually, setManually] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [pageStep, setPageStep] = useState();

  const link = () => {
    setManually(!manually);
  };

  const returnToBulkUpload = () => {
    setManually(!manually);
  };

  const checked = () => {
    setAgreed(!agreed);
  };

  useEffect(() => {
    //const route = routes.find(r => r.path === pathname);
    //const { order } = route;
    //setPageStep(order);
    // dispatch({
    //   type: TYPES.SET_STEP,
    //   payload: order
    // });
  }, [dispatch, pathname]);

  return (
    <div className='pagetwo'>
      Page2 klasdjfalsfjlas;fjasf
    </div>
  );
};

export default Page;
