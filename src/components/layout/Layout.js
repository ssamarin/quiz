import React, {Component} from "react";

import MenuToggle from "../navigation/menuToggle/MenuToggle";
import Drawer from "../navigation/drawer/Drawer";
import classes from './layout.module.scss';

class Layout extends Component {

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    })
  }

  render() {
    return (
      <div className={classes.layout}>

        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
  }

export default Layout;