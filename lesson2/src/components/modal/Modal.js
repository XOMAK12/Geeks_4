import React from 'react';
import classes from './Modal.module.css';


const Modal = ({handleShow}) => {
    console.log(handleShow,'handleShowhandleShow');
    return (
        <>
         <div className={classes.modalWrapper}/>
         <div className={classes.modalContent}>
             <button onClick={handleShow}>Закрыть</button>
             <h1>Modal</h1>
         </div>
        </>
    );
};

export default Modal;