import { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import icon_trash from '../../assets/icon_trash.svg';
import icon_edit from '../../assets/icon_edit.svg';

import './Task.css';

export default function Task({ task }) {
  const { removeTask, findTask } = useContext(TaskListContext);

  function handleDelete() {
    removeTask(task.id);
  }

  function handleEdit() {
    findTask(task.id);
  }

  return (
    <li className="list_item">
      <span className="list_item-label">{task.label}</span>
      <div className="list_item-action">
        <button className="btn_delete btn_task" onClick={handleDelete}>
          <img src={icon_trash} alt="trash icon" />
        </button>
        <button className="btn_edit btn_task" onClick={handleEdit}>
          <img src={icon_edit} alt="edit icon" />
        </button>
      </div>
    </li>
  );
}
