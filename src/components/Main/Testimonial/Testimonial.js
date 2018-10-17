import React from 'react';
import { string } from 'prop-types';

const Testimonial = ({ name, story }) => (
  <div className="col-6">
    <div className="testimonial-item arrow-after shadow-effect">
      <h5 className="testimonial-item__title">{name}</h5>
      <q className="testimonial-item__quote">
        <i>{story}</i>
      </q>
    </div>
  </div>
);

Testimonial.propTypes = {
  name: string.isRequired,
  story: string.isRequired,
};

export default Testimonial;
