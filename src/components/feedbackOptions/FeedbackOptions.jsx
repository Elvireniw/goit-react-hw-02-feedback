import React from 'react';
import css from './FeedbackOptions.module.css';

import { BtnFeedback } from 'components/buttonFeedback/ButtonFeedback';
import { Icons } from './Icons';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnWrapper}>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              key={option}
              icon={Icons[option]}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </ul>
  );
};
