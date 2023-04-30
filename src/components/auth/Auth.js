import React, { Component } from 'react';

import axios from 'axios';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import classes from './auth.module.scss';

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

class Auth extends Component {

    state = {
        formControls: {
            
            email: {
                isFormValid: false,
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                isFormValid: false,
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Пароль должен содержать не менее 6 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true,
        }
        
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAreIyD53DMHuuLguoi14w_wLCRGd5NE64', authData)

            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true,
        }
        
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAreIyD53DMHuuLguoi14w_wLCRGd5NE64', authData)

            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
        
    }

    submitHandler = e => {
        e.preventDefault();
    }

    validateControl(value, validation) {
        if (!validation) {
          return true;
        }
    
        let isValid = true;
    
        if (validation.required) {
          isValid = value.trim() !== '' && isValid;
        }
    
        if (validation.email) {
          isValid = validateEmail(value) && isValid;
        }
    
        if (validation.minLength) {
          isValid = value.length >= validation.minLength && isValid;
        }
    
        return isValid;
    }

    onChangeHandler = (e, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        });

        this.setState({
            formControls, isFormValid
        });
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, i) => {
            const control = this.state.formControls[controlName];
            return (
                <Input 
                    key={controlName + i}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={true}
                    errorMessage={control.errorMessage}
                    onChange={e => this.onChangeHandler(e, controlName)}
                />
            )
        });
    }

    render() {
        return (
            <div className={classes.auth}>
                <div>
                    <h1>Авторизация</h1>
    
                    <form 
                        onSubmit={this.submitHandler}
                        className={classes.authForm}>
    
                        { this.renderInputs() }

                        <Button 
                            type="success" 
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}>
                            Войти
                        </Button>
                        <Button 
                            type="primary" 
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}>
                            Зарегестрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;