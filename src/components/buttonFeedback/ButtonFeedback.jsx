import React from 'react';
import css from './ButtonFeedback.module.css';

export const BtnFeedback = ({
  icon: Icon = null,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <button className={css.btnFeedback} type={type} onClick={onClick}>
      {Icon && <Icon size="14" />}
      {children}
    </button>
  );
};
