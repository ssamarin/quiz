import React from "react";

import AnswerItem from "../answerItem/AnswerItem";
import classes from './answerList.module.scss';

const AnswersList = props => (
  <ul className={classes.answersList}>
    { props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
        />
      )
    }) }
  </ul>
)

export default AnswersList;