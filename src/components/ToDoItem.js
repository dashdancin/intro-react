import React from "react";
import '../estilos/ToDoItem.css';

function ToDoItem(props){
    return (
        <li className='ToDoItem'>
            <span className={`icon-check ${props.completed && 'icon-check-active'}`}
            onClick={props.onComplete}
            >
            ᄼ
            </span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p-completed'}`}>
            {props.text}
            </p>
            <span className='Icon Icon-delete'
            onClick={props.onDelete}
            >
            X
            </span>
        </li>
    )
};

export { ToDoItem };