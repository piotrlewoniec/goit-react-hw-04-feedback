import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message = 'no data' }) => (
  <p className={css.info}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};
