import { useContext, useState } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import './TaskForm.css';

export default function TaskForm() {
  const { addTask } = useContext(TaskListContext);

  const [label, setLabel] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setLabel(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask(label);
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
          <button id="action_add" className="action" type="submit">
            Add
          </button>
          <button id="action_clear" className="action">
            Clear
          </button>
        </section>
      </label>
    </form>
  );
}
