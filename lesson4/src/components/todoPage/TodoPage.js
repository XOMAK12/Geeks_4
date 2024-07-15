import React, {useState} from 'react';
import Header from "../header/Header";
import Input from "../input/Input";
import TodoList from "../TodoList/TodoList";
import Modal from "../modal/Modal";
import Button from "../button/Button";

const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ input, setInput ] = useState('');
    const [ todoList, setTodoList ] = useState([
            {
                id: 1,
                title: 'HTML',
                complete: false
            },
            {
                id: 2,
                title: 'CSS',
                complete: false
            },
            {
                id: 3,
                title: 'JS',
                complete: false
            }
        ]
    );
    const [searchTerm, setSearchTerm] = useState('');

    const handleShow = () => {
        setShow(prev => !prev);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleAdd = () => {
        setTodoList(prev => [...prev,
            {
                id: prev.length + 1,
                title: input,
                complete: false
            }
        ]);
        setInput(''); // clear input after adding
    };

    const handleDelete = (id) => {
        const updatedList = todoList.filter(todo => todo.id !== id);
        const reIndexedList = updatedList.map((todo, index) => ({
            ...todo,
            id: index + 1
        }));
        setTodoList(reIndexedList);
    };

    const handleEdit = (text) => {
        todoList.map(todo => {
            if (text.id === todo.id) return todo.title = text.title
        })
        setTodoList([...todoList]);
    }

    const handleDone = (id) => {
        setTodoList(todoList.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
                console.log(`${todo.id}`, todo.complete);
            }
            return todo;
        }));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTodoList = todoList.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header/>
            <Input value={searchTerm} onChange={handleSearch} placeholder="Search Todos"/>
            <TodoList todoList={filteredTodoList} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
            {
                show && <Modal handleShow={handleShow} handleChange={handleChange} handleAdd={handleAdd} input={input}/>
            }
            <Button name={'Открыть'} color={'green'} action={handleShow}/>
        </>
    );
};

export default TodoPage;