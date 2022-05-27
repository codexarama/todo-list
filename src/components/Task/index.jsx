// import { useEffect } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
// import { ThemeContext, themes } from '../../context/ThemeContext';
import { bgSwitcher, theme } from '../../utils/handlers';

import usePopup from '../../hooks/usePopup';
import Priority from '../Priority';

import './Task.css';

function Task({ task }) {
  // useEffect(() => {
  //   console.log('task is rendering');
  // }, []);

  const { removeTask, findTask } = useContext(TaskListContext);

  function handleDelete() {
    removeTask(task.id);
  }

  // const { changeTheme, themes } = useContext(ThemeContext);
  // const [addMode, setAddMode] = useState(true);

  function handleEdit() {
    bgSwitcher(theme.add, theme.update);
    findTask(task.id);
    const input = document.querySelector('input');
    input.focus();

    // changeTheme(themes.update);

    // setAddMode(false);
    // console.log(addMode); // 1st "true" but it should be "false"
    // changeTheme(addMode ? themes.add : themes.update);
  }

  function handlePriority() {
    findTask(task.id);
    toggle();
  }

  // handle Popup "priority" actions
  const { isOpen, toggle, keyboardEscape } = usePopup();

  // press escape to close Popup "priority" || Modal element
  useEffect(() => {
    keyboardEscape();
  });

  return (
    <>
      <li
        role="listitem"
        className={
          task.priority ? `list_item priority_${task.priority}` : 'list_item'
        }
      >
        <div className="list_item-info">
          <span
            className="list_item-infoLabel"
            tabIndex="0"
            onClick={handlePriority}
          >
            {task.label}
          </span>
          <span
            className="list_item-infoTimestamp"
            tabIndex="0"
            onClick={handlePriority}
          >
            {task.timestamp}
          </span>
        </div>
        <div className="list_item-action">
          <button
            tabIndex="0"
            className="list_item-actionDelete"
            aria-label="delete-task"
            onClick={handleDelete}
          >
            {/* icon : background img url in css file */}
          </button>
          <button
            tabIndex="0"
            className="list_item-actionEdit"
            aria-label="edit-task"
            onClick={handleEdit}
          >
            {/* icon : background img url in css file */}
          </button>
        </div>
      </li>
      <Priority isOpen={isOpen} close={toggle} />
    </>
  );
}

export default React.memo(Task);
