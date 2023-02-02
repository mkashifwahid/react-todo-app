import React, { useContext } from 'react';
import TodoContext from './TodoComponent';

export default function TodoList() {
  const todos = useContext(TodoContext);
  console.log('todo list', todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
