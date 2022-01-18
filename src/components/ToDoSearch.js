import React from 'react';
import '../estilos/ToDoSearch.css';

function ToDoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return [
        <input 
        className='ToDoSearch' 
        placeholder='Escribe aquí tu tarea'
        value={searchValue}
        onChange={onSearchValueChange}
        />,
    ];
}

export { ToDoSearch };