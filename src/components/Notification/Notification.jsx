import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => <p className={css.message}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export { Notification };
