import React from 'react';
import '../estilos/ToDoSearch.css';

function ToDoSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    
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
        <p>{searchValue}</p>
    ];
}

export { ToDoSearch };