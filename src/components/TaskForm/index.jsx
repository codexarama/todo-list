import { useState } from 'react';

import './TaskForm.css';

export default function TaskForm() {
  const [label, setLabel] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setLabel(event.target.value);
  }

  return (
    <form action="?">
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
