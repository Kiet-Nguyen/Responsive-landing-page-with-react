import React from 'react';

import '../../index.css';
import './Header.css';
import headerImg from '../../assets/Header-img.png';
import Banner from '../Main/Banner/Banner';

const Header = () => (
  <header id="top" className="header">
    <div className="container">
      <div className="row header-columns">
        <div className="col-6">
          <img className="img-responsive" src={headerImg} alt="Header" />
        </div>
        <div className="col-6">
          <h1 className="header-title">
            <span className="h1-highlight"><i>Powerfully Simple </i></span>
            with a
            <br />
            <span className="h1-highlight"><i>Squeeky Clean </i></span>
            design.
          </h1>

          <p className="header-text">
            Find out how you can offer quick and powerfull solutions to your cutomers now!
          </p>

          <a className="anchor btn btn-blue" href="https://reactjs.org/">Learn more</a>
        </div>
      </div>

      <Banner
        headingPart1="Create a"
        highlight=" powerful "
        headingPart2="solution now"
        buttonText="Get started"
      />
    </div>
  </header>
);

export default Header;
