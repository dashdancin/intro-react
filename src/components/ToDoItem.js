import React from "react";
import '../estilos/ToDoItem.css';

function ToDoItem(props){
        const onComplete = () => {
            alert('Ya completaste todo' + props.text);
        };
        const onDelete = () => {
            alert('Borraste el todo' + props.text);
        }

    return (
        <li className='ToDoItem'>
            <span className={`icon-check ${props.completed && 'icon-check-active'}`}
            onClick={onComplete}
            >
            ᄼ
            </span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p-completed'}`}>
            {props.text}
            </p>
            <span className='Icon Icon-delete'
            onClick={onDelete}
            >
            X
            </span>
        </li>
    )
};

export { ToDoItem };