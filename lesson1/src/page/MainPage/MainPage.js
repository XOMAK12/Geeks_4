import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import User from '../../components/user/User';


const MainPage = () => {
    return (
        <div>
            <Header/>
            <h1>MainPage</h1>
            <User name={'Bakyt'} age={18} email={'baktybeks@mail.ru'}/>
            <Footer/>
        </div>
    );
};

export default MainPage;