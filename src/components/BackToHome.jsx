import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../styles/BackToHome.scss';

const BackToHome = () => {
  return (
    <div className="BackToHome">
      <Link to="/#portfolio-section" className="back-link">
        <img src="/medias/dp-logo2.png" alt="logo" className="back-logo" />
      </Link>
    </div>
  )
};

export default BackToHome;