import React from 'react';
import '../estilos/CreateToDoButton.css';

function CreateToDoButton(props) {
    const onClickButton = (msg) => {
        alert(msg);
    };
    return (
        <button
        className='CreateToDoButton'
        onClick={(onClickButton('Aquí se debería abrir el modal'))}
        >
         +
        </button>
    );
}

export { CreateToDoButton };