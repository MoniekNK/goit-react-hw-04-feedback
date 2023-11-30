import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttons}>
    {options.map(option => (
      <button
        className={css.button}
        key={option}
        name={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
