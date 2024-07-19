import React from 'react';
import classes from './button.module.css';

const Button = ({name, action, color}) => {
    return (
     <button className={`${classes.btn} ${classes[color]}`} onClick={action} >{name}</button>
    );
};

export default Button;