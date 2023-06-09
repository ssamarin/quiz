import React from "react";

import AnswerItem from "../answerItem/AnswerItem";
import classes from './answerList.module.scss';

const AnswersList = props => {
  return (
    <ul className={classes.answersList}>
      { props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        )
      }) }
    </ul>
  )
}
export default AnswersList;