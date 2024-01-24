import React from 'react';
import css from './Header.module.css'

export const Header = ({ title }) => {
  return <h1 className={css.mainHeader}>{title}</h1>;
};