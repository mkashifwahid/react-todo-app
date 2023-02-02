import React, { useContext, useState } from 'react';
import TodoContext from './TodoComponent';

export default function AddTodo() {
  console.log('add todo component');
  let [todo, setTodo] = useState('');
  let todos = useContext(TodoContext);
  console.log('add todo ', todos);

  const onClickHandler = () => {
    let abc = 0;
    let aa = todos[0];
    //aa.push(todo);
    todos[1](++abc);
    // todos[1](todos[0].push(todo));
    // todos[1](todos[0].push(todo));
    // const refreshTodo = todos[1];
    // refreshTodo(newTodos);
    //todos[1](todos[0].push('a'));

    console.log(
      'all todos',
      typeof todos,
      typeof todos[0],
      typeof todos[1],
      todos,
      'aa',
      typeof aa,
      aa
    );
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
