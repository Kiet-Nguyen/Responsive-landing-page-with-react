import React from 'react';
import { string, boolean } from 'prop-types';

const Development = ({ id, status, label, title, content, quote, buttonText }) => (
  <span>
    <input type="radio" id={id} name="tab-group-1" checked={status} />
    <label className="tab__label btn-gray200" for={id}>{label}</label>

    <div className="tab__content">
      <h5 className="content-title">{title}</h5>
      <p className="content-text">{content}</p>
      <div className="content-quote">
        <q>{quote}</q>
      </div>
      <a className="anchor btn-sm btn-blue tab-btn btn" href="https://reactjs.org/">{buttonText}</a>
    </div>
  </span>
);

Development.propTypes = {
  id: string.isRequired,
  status: string.isRequired,
  label: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  quote: string.isRequired,
  buttonText: string.isRequired,
};

export default Development;
