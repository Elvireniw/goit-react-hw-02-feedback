import React from 'react';
import css from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <main>{children}</main>
    </div> 
  );
};