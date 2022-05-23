import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import './Task.css';

export default function Task({ task }) {
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
    <li className="list_item">
      <span className="list_item-label" tabIndex="0">
        {task.label}
      </span>
      <div className="list_item-action">
        <button
          id="action_delete"
          onClick={handleDelete}
        >
          {/* icon : background img url in css file */}
        </button>
        <button
          id="action_edit"
          onClick={handleEdit}
        >
          {/* icon : background img url in css file */}
        </button>
      </div>
    </li>
  );
}
