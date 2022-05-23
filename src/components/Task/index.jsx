// import { useEffect } from 'react';
import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import './Task.css';

function Task({ task }) {
  // useEffect(() => {
  //   console.log('task is rendering');
  // }, []);

  const { removeTask, findTask } = useContext(TaskListContext);

  function handleDelete() {
    removeTask(task.id);
  }

  function handleEdit() {
    findTask(task.id);
    const input = document.querySelector('input');
    input.focus();
  }

  return (
    <li role="listitem" className="list_item">
      <span className="list_item-label" tabIndex="0">
        {task.label}
      </span>
      <div className="list_item-action">
        <button
          id="action_delete"
          tabIndex="0"
          aria-label="delete task"
          onClick={handleDelete}
        >
          {/* icon : background img url in css file */}
        </button>
        <button
          id="action_edit"
          tabIndex="0"
          aria-label="edit task"
          onClick={handleEdit}
        >
          {/* icon : background img url in css file */}
        </button>
      </div>
    </li>
  );
}

export default React.memo(Task);
