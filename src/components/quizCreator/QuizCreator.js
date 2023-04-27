import React, { Component } from 'react';

import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import Select from '../UI/select/Select';
import { createControl }  from '../../form/formFramework/formFramework';
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
        rightAnswerId: 1,
        formControls: createFormControls(),
    }
    
    submitHandler = e => {
        e.preventDefault();
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, i) => {
            const control = this.state.formControls[controlName];

            return (
                <>
                    <Input 
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        key={i}
                        onChange={e => this.changeHandler(e.target.value, controlName)}
                    />
                    { i === 0 ? <hr /> : null }
                </>
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
                            onClick={this.addQuestionHandler}>
                            Добавть вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}>
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator;