import React from "react";

import AnswersList from "../answersList/AnswersList";
import classes from './activeQuiz.module.scss';

const ActiveQuiz = props => {
  return (
    <div className={classes.activeQuiz}>
      <p className={classes.question}>
        <span>
          <strong>2.</strong>&nbsp;
          {props.question}
        </span>

        <small>{props.answerNumber} из {props.quizLength}</small>
      </p>

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz;