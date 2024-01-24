import React from 'react';
import css from './Section.module.css'

import { Header } from 'components/header/Header';

export const Section = ({ title, children }) => {
  return (
    <section className={css.sectionWrapper}>
      <Header title={title} />
      {children}
    </section>
  );
};