// import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoContext from './TodoComponent';
import { useState } from 'react';
import User from './User';

function App() {
  let value = useState([]);
  console.log('app', value);
  console.log(typeof User);

  return (
    <>
      <TodoContext.Provider value={value}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
