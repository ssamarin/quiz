import React from 'react';

import classes from './select.module.scss';

const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={classes.select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select 
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                { props.options.map((option, i) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + i}>
                            {option.text}
                        </option>
                    )
                }) }
            </select>
        </div>
    )
}

export default Select;