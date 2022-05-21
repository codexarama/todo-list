import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { TaskListContext } from '../../context/TaskListContext';

import icon_check from '../../assets/icon_check.svg';
import Task from '../Task';

import './TaskList.css';

export default function TaskList() {
  const { tasks } = useContext(TaskListContext);

  function NoTask() {
    return createPortal(
      <div id="no_task">
        <span>
          No tasks
          <img src={icon_check} alt="icon check" id="icon_check" />
        </span>
      </div>,
      document.getElementById('actions')
    );
  }

  return (
    <>
      {tasks.length ? (
        <ul id="task_list">
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      ) : (
        <NoTask />
      )}
    </>
  );
}
