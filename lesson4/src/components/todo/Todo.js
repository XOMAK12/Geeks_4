import React, {useState} from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';


const Todo = ({
    todo,
    handleDelete,
    handleEdit,
    handleDone,
    handleCurrentEdit,
    isEdit
}) => {
    const [input, setInput] = useState(todo.title);
    return (
        <>
            <li className={`${classes.li} ${todo.complete && classes.done}`}>
                <div className={classes.info}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <Button name='Edit' action={() => handleCurrentEdit(todo.id)}/>
                    <Button name='Done' action={() => handleDone(todo.id)}/>
                    <Button name='Delete' action={() => handleDelete(todo.id)}/>
                </div>
            </li>
            {
                isEdit &&
                <div className={classes.edit}>
                    <input type="text"
                        value={input}
                    onChange={event => setInput(event.target.value)}
                    />
                    <button onClick={() => {
                        handleEdit(
                            {
                                ...todo, title: input
                            }
                        )
                    }}>save</button>
                    <button>cancel</button>
                </div>
            }
        </>
    );
};

export default Todo;