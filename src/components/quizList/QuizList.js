import React, {Component} from 'react';

import classes from './quizList.module.scss';
import {NavLink} from 'react-router-dom';

export default class QuizList extends Component {

  renderQuizes() {
    return [1, 2, 3].map((quiz, i) => {
      return (
        <li
          key={i}
        >
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.quizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>
            { this.renderQuizes() }
          </ul>
        </div>
      </div>
    )
  }
}