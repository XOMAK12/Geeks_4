import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import TodoList from '../../components/TodoList/TodoList';
import Input from "../../components/input/Input";


const MainPage = () => {
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

    const handleEdit = () => {
        console.log('handleEdit');
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
        <div>
            <Header text={'red'}/>
            <Input value={searchTerm} onChange={handleSearch} placeholder="Search Todos"/>
            <TodoList todoList={filteredTodoList} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
            {
                show && <Modal handleShow={handleShow} handleChange={handleChange} handleAdd={handleAdd} input={input}/>
            }
            <Button name={'Открыть'} color={'green'} action={handleShow}/>
            <Footer/>
        </div>
    );
};

export default MainPage;