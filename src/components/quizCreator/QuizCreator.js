import React, { Component } from 'react';

import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import Auxiliary from '../auxiliary/Auxiliary';
import Select from '../UI/select/Select';
import { createControl, validate, validateForm }  from '../../form/formFramework/formFramework';
import classes from './quizCreator.module.scss';

function createOptionControl(number) {
    return createControl({
      label: `Вариант ${number}`,
      errorMessage: 'Значение не может быть пустым',
      id: number
    }, {required: true})
  }

  function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым',
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
  }

class QuizCreator extends Component  {

    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls(),
    }
    
    submitHandler = e => {
        e.preventDefault();
    }

    addQuestionHandler = (e) => {
        e.preventDefault();

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem =  {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }

        quiz.push(questionItem);
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls(),
        })
    }

    createQuizHandler = e => {
        e.preventDefault();

        console.log(this.state.quiz);
    }

    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.touched = true;
        control.value = value
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls),
        })
    }
  
    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, i) => {
            const control = this.state.formControls[controlName];

            return (
                <Auxiliary key={controlName + i}>
                    <Input 
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={e => this.changeHandler(e.target.value, controlName)}
                    />
                    { i === 0 ? <hr /> : null }
                </Auxiliary>
            )
        });
    }

    selectChangeHandler = e => {
        this.setState({
            rightAnswerId: +e.target.value
        });
    }

    render() {
        const select = <Select 
            label='Выберите правильный ответ'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        /> 

        return (
            <div className={classes.quizCreator}>
                <div>
                    <h1>Создание теста</h1>
    
                    <form onSubmit={this.submitHandler}>
                        { this.renderControls() }

                        {select}

                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавть вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}>
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator;