import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import User from '../../components/user/User';
import School from '../../components/school/School';
import Example from '../../components/example/Example';
import Button, {Button2} from '../../components/button/Button';
import Count from '../../components/count/Count';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';


const MainPage = () => {
    const [show, setShow] = useState(false)
    const [input, setInput] = useState('')
    const handleShow = () => {
        setShow(prev=> !prev)
    }

    const handleChange =(event) => {
        console.log(event.target.value);
        setInput(event.target.value)
    }

    return (
        <div>
            <Header text={'red'}/>
            <Header text={'blue'}/>
            {
                show && <Modal handleShow={handleShow}/>
            }
            <h1>{input}</h1>
            <input type="text" onChange={handleChange}/>
            <Input onChange={handleChange} placeholder={'Введите текст'}/>
            {/*<Count/>*/}
            {/*<h1>MainPage</h1>*/}
            <div>Show</div>
            <button onClick={handleShow}>Открыть</button>
            {
                show && <div style={{backgroundColor: "red"}}>Модальное окно</div>
            }
            <User name={'Bakyt'} age={18} email={'baktybeks@mail.ru'}/>
            {/**/}
            <Example title={'Example'}>
                <p style={{color: 'red'}}>name: Bakyt</p>
                <p style={{color: 'blue'}}>name: Bakyt</p>
                <p style={{color: 'green'}}>name: Bakyt</p>
                <p>name: Bakyt</p>
                <School title={'KSTU'}/>

                <Button name={'Save'} />
                <Button name={'Edit'} />
                <Button name={'Delete'} />

            </Example>
            <Footer/>
        </div>
    );
};

export default MainPage;