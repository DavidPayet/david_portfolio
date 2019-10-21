import React from 'react';
import { Link } from "react-scroll";

import './BackToTopButton.scss';

const BackToTopButton = () => (
  <button type="button" title="Haut de Page" className="BackToTopButton hidden">
    <Link
      activeClass="active"
      to="up-page"
      spy={true}
      smooth={true}
      duration={500}
    >
      <img alt="Back to top" src="/medias/topArrow.png" />
    </Link>

  </button>
);

export default BackToTopButton;