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

  const [isHighlighted, setIsHighlighted] = useState(false);

  // handle Popup element actions
  const { isOpen, toggle, keyboardEscape } = usePopup();

  // press escape to close Popup || Modal element
  useEffect(() => {
    keyboardEscape();
  });

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

  return (
    <>
      <li
        role="listitem"
        className={isHighlighted ? 'list_item active' : 'list_item'}
        onClick={toggle}
      >
        <span className="list_item-label" tabIndex="0">
          {task.label}
        </span>
        <div className="list_item-action">
          <button
            id="action_delete"
            tabIndex="0"
            aria-label="delete-task"
            onClick={handleDelete}
          >
            {/* icon : background img url in css file */}
          </button>
          <button
            id="action_edit"
            tabIndex="0"
            aria-pressed="false"
            aria-label="edit-task"
            onClick={handleEdit}
          >
            {/* icon : background img url in css file */}
          </button>
        </div>
      </li>
      <Priority priority={isOpen} close={toggle} />
    </>
  );
}

export default React.memo(Task);
