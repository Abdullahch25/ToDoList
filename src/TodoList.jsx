import React from 'react';
import TodoItem from './TodoItem';

function TodoList(prop) {
    const {tasks,removeTask}=prop;
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} index={index} task={task} removeTask={removeTask}/>
      ))}
    </ul>
  );
}

export default TodoList;
