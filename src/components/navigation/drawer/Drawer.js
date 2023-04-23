import React, { Component } from "react";

import BackDrop from "../../UI/backDrop/BackDrop";
import classes from './drawer.module.scss';

const links = [
    1, 2, 3
  ]
  
  class Drawer extends Component {
  
    renderLinks() {
      return links.map((link, index) => {
        return (
          <li key={index}>
            <a>Link {link}</a>
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