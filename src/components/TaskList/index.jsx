import { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import icon_check from '../../assets/icon_check.svg';
import Task from '../Task';

import './TaskList.css';

export default function TaskList() {
  const { tasks } = useContext(TaskListContext);

  return (
    <ul id="task_list">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}
