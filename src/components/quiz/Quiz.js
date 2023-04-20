import React, {Component} from "react";

import ActiveQuiz from "../activeQuiz/ActiveQuiz";
import classes from './quiz.module.scss';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'Что такое Пудж ?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Пудж - это война в которой каждый против всех', id: 1},
          {text: 'Пудж - это Оксимирон и Шок', id: 2},
          {text: 'Пуджа не бывает', id: 3},
          {text: 'Самый сильный герой Дота 2', id: 4}
        ]
      },
      {
        question: 'Самый сильный предмет Дота 2',
        rightAnswerId: 2,
        id: 2,
        answers: [
          {text: 'Pudge', id: 1},
          {text: 'Оксимирон и шок', id: 2},
          {text: 'Ghost Scepter', id: 3},
          {text: 'Николай', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Answer id', answerId);
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    })
  }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;