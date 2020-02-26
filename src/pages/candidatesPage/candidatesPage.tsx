import React, { useState } from 'react';
import './candidatesPage.scss';
import CandidatesCallOuts from './candidatesCallOuts/callOuts';
import { IAppState } from '../../data/store';
import { useSelector } from 'react-redux';

const CandidatesPage = () => {
  const [buttonShow, setButtonShow] = useState(true);
  const shouldShowCallOut = e => {
    setButtonShow(e);
  };

  const gResumeMessageSent = (state: IAppState) =>
    state.homeHub.resumeMessageSent;
  const resumeMessageSent = useSelector(gResumeMessageSent);

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
          <img src={require('../../images/candidatesPageLeftSection.svg')} />
        </section>
        <section className='right-section'>
          {!resumeMessageSent && (
            <div className='right-section-top'>
              {buttonShow && (
                <CandidatesCallOuts
                  shouldShowCallOut={(e: boolean) => shouldShowCallOut(e)}
                />
              )}
            </div>
          )}
          {resumeMessageSent ? (
            <img
              className='right-section-bottom'
              src={require('../../images/candidate.svg')}
            />
          ) : (
            <img
              className='right-section-bottom'
              src={require('../../images/candidatesPageRightSection-bottom.svg')}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default CandidatesPage;
