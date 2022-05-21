import { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import icon_check from '../../assets/icon_check.svg';

import './TaskForm.css';

export default function TaskForm() {
  const { addTask, editedTask, updateTask, cleared, clearList } =
    useContext(TaskListContext);

  const [label, setLabel] = useState('');

  function handleChange(event) {
    setLabel(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    !editedTask ? (addTask(label), setLabel('')) : updateTask(editedTask.id, label);
  }

  // console.log(label);

  useEffect(() => {
    editedTask ? setLabel(editedTask.label) : setLabel('');
    // console.log(editedTask);
  }, [editedTask]);

  function handleClear() {
    clearList();
  }

  return (
    <form onSubmit={handleSubmit} action="?">
      <label htmlFor="add_task">
        <input
          id="add_task"
          type="text"
          placeholder="New task"
          value={label}
          onChange={handleChange}
          required
        />
        <section id="actions">
          <button
            id={editedTask ? 'action_update' : 'action_add'}
            className="action"
            type="submit"
          >
            {editedTask ? 'Update' : 'Add'}
          </button>
          {!cleared && (
            <button id="action_clear" className="action" onClick={handleClear}>
              Clear
            </button>
          )}
        </section>
      </label>
    </form>
  );
}
