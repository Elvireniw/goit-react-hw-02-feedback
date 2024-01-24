import React from 'react';
import css from './Notification.module.css';

export const Notification = ({ msg }) => {
  return <h2 className={css.message}>{msg}</h2>;
};
