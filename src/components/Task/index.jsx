// import { useEffect } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { TaskListContext } from '../../context/TaskListContext';
// import { ThemeContext, themes } from '../../context/ThemeContext';

import { bgSwitcher, focusInput, theme } from '../../utils/handlers';
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
    focusInput()
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
        <span className="list_item-label" tabIndex="0" onClick={handlePriority}>
          {task.label}
        </span>
        <div className="list_item-action">
          <button
            tabIndex="0"
            aria-label="delete-task"
            className="list_item-actionDelete"
            onClick={handleDelete}
          >
            {/* icon : background img url in css file */}
          </button>
          <button
            tabIndex="0"
            aria-pressed="false"
            aria-label="edit-task"
            className="list_item-actionEdit"
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
