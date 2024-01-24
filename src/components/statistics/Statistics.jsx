import React from 'react';
import css from './Statistics.module.css'

import { HiOutlineHeart } from 'react-icons/hi';
import {
  MdThumbDownOffAlt,
  MdSentimentNeutral,
  MdOutlineSummarize,
  MdPercent,
} from 'react-icons/md';

import { Notification } from '../notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <ul className={css.staticList}>
      <li>
        <p className={css.descrStatistics}>
          <HiOutlineHeart size="14" />
          Good: <span>{good}</span>
        </p>
      </li>
      <li>
        <p className={css.descrStatistics}>
          <MdSentimentNeutral size="14" />
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p className={css.descrStatistics}>
          <MdThumbDownOffAlt size="14" />
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p className={css.descrStatistics}>
          <MdOutlineSummarize size="14" />
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p className={css.descrStatistics}>
          <MdPercent size="14" />
          Positive feedback: <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  ) : (
    <Notification msg="There is no feedback" />
  );
};