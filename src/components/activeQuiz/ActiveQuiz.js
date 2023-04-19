import React from "react";

import AnswersList from "../answersList/AnswersList";
import classes from './activeQuiz.module.scss';

const ActiveQuiz = props => (
  <div className={classes.activeQuiz}>
    <p className={classes.question}>
      <span>
        <strong>2.</strong>&nbsp;
        Как дела?
      </span>

      <small>4 из 12</small>
    </p>

    <AnswersList
      answers={props.answers}
    />
  </div>
)

export default ActiveQuiz;