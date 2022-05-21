import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TaskListContext } from '../../context/TaskListContext';

import Task from '../Task';

export default function TaskList() {
  const { tasks } = useContext(TaskListContext);

  return (
    <>
      {tasks.length ? (
        <ul id="task_list">
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      ) : null}
    </>
  );
}
