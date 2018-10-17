import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Intro = ({ icon, highlightText, headingText, descriptionText }) => (
  <div className="col-3">
    <div className="intro-item hover-effect">
      <div className="intro-item__icon mb-1">
        <FontAwesomeIcon className="fa-icon" icon={icon} />
      </div>
      <h3 className="intro-item__header mb-1">
        <b className="h3-highlight">
          {highlightText}
        </b>
        {headingText}
      </h3>
      <p className="intro-item__text mb-1">
        {descriptionText}
      </p>

      <a className="anchor btn btn-blue btn-sm mb-1" href="https://reactjs.org/">Read more</a>
    </div>
  </div>
);

Intro.propTypes = {
  highlightText: string.isRequired,
  headingText: string.isRequired,
  descriptionText: string.isRequired,
};

export default Intro;
