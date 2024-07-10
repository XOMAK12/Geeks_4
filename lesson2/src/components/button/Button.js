import React from 'react';
import classes from './button.module.css'

const Button = ({name, onClick, color}) => {
    return (
        <button onClick={onClick} className={classes[color]}>{name}</button>
    );
};

export default Button;