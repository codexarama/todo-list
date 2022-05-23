import { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import Task from '../Task';

import './TaskList.css';

export default function TaskList() {
  const { tasks } = useContext(TaskListContext);

  return (
    <>
      {tasks.length ? (
        <ul role="list" id="task_list">
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      ) : null}
    </>
  );
}
