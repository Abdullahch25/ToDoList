import React, { useState } from 'react';

function TodoItem(prop) {
     const { task, index, removeTask }=prop;
     const [checked, setChecked] = useState(false);

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)}/>
        {task}
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
}

export default TodoItem;
