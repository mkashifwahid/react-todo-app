import React, { useContext } from 'react';
import TodoContext from './TodoComponent';

export default function TodoList() {
  const todos = useContext(TodoContext);
  console.log('todo list', todos[0]);

  return (
    <div>
      <ul>
        {todos[0].map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
