import React from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';


const Todo = ({ todo, handleDelete, handleEdit, handleDone}) => {
    return (
        <li className={`${classes.li} ${todo.complete && classes.done}`}>
            <div className={classes.info}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
            </div>
            <div className={classes.btns}>
                <Button name='Edit' action={handleEdit}/>
                <Button name='Done' action={()=>handleDone(todo.id)}/>
                <Button name='Delete' action={()=>handleDelete(todo.id)}/>
            </div>

        </li>
    );
};

export default Todo;