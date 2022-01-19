import React from 'react';
import {ToDoItem} from './components/ToDoItem';
import {ToDoCounter} from './components/ToDoCounter';
import {ToDoList} from './components/ToDoList';
import {ToDoSearch} from './components/ToDoSearch';
import {CreateToDoButton} from './components/CreateToDoButton';


const defaultTodos = [
  { text: 'Cortar pan', completed: true},
  { text: 'Tomar el curso de intro a React', completed: true},
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
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