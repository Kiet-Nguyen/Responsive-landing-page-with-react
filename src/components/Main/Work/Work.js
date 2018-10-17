import React from 'react';
import { string } from 'prop-types';

const Work = ({ imgSrc, title, content }) => (
  <div className="col-4">
    <div className="blog-item arrow-after shadow-effect">
      <div className="blog-item__image">
        <img src={imgSrc} alt="Blog" className="img-responsive" />
      </div>
      <h5 className="blog-item__title">{title}</h5>
      <p className="blog-item__text">{content}</p>
    </div>
  </div>
);

Work.propTypes = {
  imgSrc: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
};

export default Work;
