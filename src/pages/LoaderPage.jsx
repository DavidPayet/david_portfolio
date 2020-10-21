import React from 'react';
import { SolarSystemLoading } from 'react-loadingg';

import '../styles/LoaderPage.scss';

const LoaderPage = () => {

  return (
    <>
      <div className="LoaderPage">
        <span className="letter">C</span>
        <span className="letter">H</span>
        <span className="letter">A</span>
        <span className="letter">R</span>
        <span className="letter">G</span>
        <span className="letter">E</span>
        <span className="letter">M</span>
        <span className="letter">E</span>
        <span className="letter">N</span>
        <span className="letter">T</span>
      </div>
      <SolarSystemLoading
        color={'#f1f1f1'}
        size={'large'}
      />
    </>
  )
}

export default LoaderPage;