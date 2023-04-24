import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

import BackDrop from "../../UI/backDrop/BackDrop";
import classes from './drawer.module.scss';

const links = [
    {to: '/', label: 'Список'},
    {to: '/auth', label: 'Авторизация'},
    {to: '/quiz-creator', label: 'Создать тест'},
  ]
  
  class Drawer extends Component {

    renderLinks() {
      return links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
              onClick={this.props.onClose}
              >
                {link.label}
            </NavLink>
          </li>
        )
      })
    }
  
    render() {
      const cls = [classes.drawer]
  
      if (!this.props.isOpen) {
        cls.push(classes.close)
      }
  
      return (
        <>
            <nav className={cls.join(' ')}>
            <ul>
                { this.renderLinks() }
            </ul>
            </nav>
            { this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null }
        </>
      )
    }
  }
  
  export default Drawer