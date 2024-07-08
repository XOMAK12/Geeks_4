import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import Car from "../../components/car/Car";
import Schools from "../../components/schools/Schools";
import Example from "../../components/example/Example";
import Button from "../../components/button/Button";
import Count from "../../components/count/Count";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";


const MainPage = () => {
    const [show, setShow] = useState(false)
    const [input, setInput] = useState('');
    console.log(show, 'в начале')
    const handleShow = () => {
        setShow(prev => !prev)
    }
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div>
            <Header/>
            {
                show && <Modal handleShow={handleShow}/>
            }
            <h1>{input}</h1>
            <input type="text" onChange={handleChange}/>
            <Input type={'password'} onChange={handleChange} placeholder={'Введите текст'}/>
            {/*<Count/>*/}
            {/*<h1>MainPage</h1>*/}
            {/*<div>Show</div>*/}
            {/*<button onClick={handleShow}>Открыть</button>*/}
            {/*{*/}
            {/*    show && <div style={{backgroundColor: "red"}}>Модальное окно</div>*/}
            {/*}*/}
            {/*<User name={'Nikita'} age={18} email={'nikita@gmail.com'} />*/}
            {/*<Car car={'Audi'} />*/}
            {/*<Example title={'Example'}>*/}
            {/*    <p style={{color : "red"}}>name: Nikita</p>*/}
            {/*    <p style={{color : "blue"}}>name: Bakyt</p>*/}
            {/*    <p style={{color : "green"}}>name: Maks</p>*/}
            {/*    <Schools title={'KSTU'}/>*/}
            {/**/}
            {/*    <Button name={'Save'}/>*/}
            {/*    <Button name={'Edit'}/>*/}
            {/*    <Button name={'Delete'}/>*/}
            {/*</Example>*/}
            {/*<Footer/>*/}
        </div>
    );
};

export default MainPage;