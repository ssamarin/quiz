import React from "react";

import classes from './answerItem.module.scss';

const AnswerItem = props => {
  return (
    <li
      className={classes.answerItem}
    >
      { props.answer.text }
    </li>
  )
}

export default AnswerItem;