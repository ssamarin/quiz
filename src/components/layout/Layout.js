import React, {Component} from "react";

import classes from './layout.module.scss';

class Layout extends Component {
    render() {
      return (
        <div className={classes.Layout}>
          <main className={classes.main}>
            { this.props.children }
          </main>
        </div>
      )
    }
  }

export default Layout;