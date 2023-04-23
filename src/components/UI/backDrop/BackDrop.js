import React from "react";

import classes from './backDrop.module.scss'

const BackDrop = props => <div className={classes.backDrop} onClick={props.onClick}></div>

export default BackDrop;