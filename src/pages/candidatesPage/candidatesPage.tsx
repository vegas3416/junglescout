import React, { useState } from 'react';
import './candidatesPage.scss';
import CandidatesCallOuts from './candidatesCallOuts/callOuts';

const CandidatesPage = () => {
  const [buttonShow, setButtonShow] = useState(true);
  const shouldShowCallOut = e => {
    setButtonShow(e);
  };

  return (
    <div className='candidatesPage'>
      <header className='header'>
        <span className='header-label'>
          Candidates for{' '}
          <span className='header-label-style'>
            Customer Service Representative—Seattle, WA
          </span>
        </span>
      </header>
      <div className='candidatesPage-content'>
        <section className='left-section'>
          <img src={require('../../images/candidatesPageLeftSection.png')} />
        </section>
        <section className='right-section'>
          <div className='right-section-top'>
            {buttonShow && (
              <CandidatesCallOuts
                shouldShowCallOut={(e: boolean) => shouldShowCallOut(e)}
              />
            )}
          </div>
          <img
            className='right-section-bottom'
            src={require('../../images/candidatesPageRightSection-bottom.png')}
          />
        </section>
      </div>
    </div>
  );
};

export default CandidatesPage;
