import React, { useState } from 'react';

function TodoInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  function handleAddTask (){
    addTask(taskText);
    setTaskText('');
  };

  return (
    <div>
      <input
        type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Add a new task"/>
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TodoInput;
