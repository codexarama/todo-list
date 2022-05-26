// import { useEffect } from 'react';
import { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import Task from '../Task';

export default function TaskList() {
  // useEffect(() => {
  //   console.log('task list is rendering');
  // }, []);

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
