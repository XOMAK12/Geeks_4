import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import Car from "../../components/car/Car";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <h1>MainPage</h1>
            <User name={'Nikita'} age={18} email={'nikita@gmail.com'} />
            <Car car={'Audi'} />
            <Footer/>
        </div>
    );
};

export default MainPage;