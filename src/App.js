import React from 'react';
import {ToDoItem} from './components/ToDoItem';
import {ToDoCounter} from './components/ToDoCounter';
import {ToDoList} from './components/ToDoList';
import {ToDoSearch} from './components/ToDoSearch';
import {CreateToDoButton} from './components/CreateToDoButton';


const defaultTodos = [
  { text: 'Cortar pan', completed: true},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <>
      <ToDoCounter
      total={totalTodos}
      completed={completedTodos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedTodos.map(todo => (
        <ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
        /> 
        ))} 
      </ToDoList>
      
      <CreateToDoButton/>
    </>
  );
}
// FAST_REFRESH = false;
// CHOKIDAR_USEPOLLING = true;
export default App;