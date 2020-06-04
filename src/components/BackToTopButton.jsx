import React from 'react';
import { Link } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";

import '../styles/BackToTopButton.scss';

const BackToTopButton = () => (
  <button type="button" title="Up Page" className="BackToTopButton">
    <Link
      activeClass="active"
      to="up-page"
      spy={true}
      smooth={true}
      duration={500}
    >
      <IoIosArrowDropup className="rubberBand" />
    </Link>
  </button>
);

export default BackToTopButton;