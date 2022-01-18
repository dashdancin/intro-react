import React from 'react';
import '../estilos/ToDoList.css';

function ToDoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {ToDoList};