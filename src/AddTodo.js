import React, { useContext, useState } from 'react';
import TodoContext from './TodoComponent';
let i = 0;

export default function AddTodo() {
  console.log('add todo component');
  let [todo, setTodo] = useState('');
  let todos = useContext(TodoContext);
  let oldtodos = todos[0];
  console.log('add todo ', ...todos[0]);

  const onClickHandler = () => {
    let abc = 0;
    todos[1]([...todos[0], todo]);
    console.log(todos[0]);
    //aa.push(todo);
    // todos[1]((oldtodos) => {
    //   return { ...oldtodos };
    // });
    // todos[1](todos[0].push(todo));
    // todos[1](todos[0].push(todo));
    // const refreshTodo = todos[1];
    // refreshTodo(newTodos);
    //todos[1](todos[0].push('a'));
  };

  console.log('todo', todo);
  return (
    <div>
      {/* <input type="text" />
      <button>Add Todo</button> */}
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={onClickHandler}>Add Todo</button>
    </div>
  );
}
