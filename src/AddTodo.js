import React, { useContext, useState } from 'react';
import TodoContext from './TodoComponent';

export default function AddTodo() {
  const [todo, setTodo] = useState([]);
  const todos = useContext(TodoContext);
  console.log(todo);

  const onClickHandler = () => {
    todos.push(todo);
    console.log('all todos', todo);
  };

  return (
    <div>
      {/* <input type="text" />
      <button>Add Todo</button> */}
      <input type="text" onChange={(e) => e.target.value} />
      <button onClick={onClickHandler}>Add Todo</button>
    </div>
  );
}
