import { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import './TaskForm.css';

export default function TaskForm() {
  const { addTask, item, editTask, cleared, clearList } = useContext(TaskListContext);

  const [label, setLabel] = useState('');

  function handleChange(event) {
    setLabel(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    !item ? (addTask(label), setLabel('')) : editTask(item.id, label);
  }

  console.log(label);

  useEffect(() => {
    item ? setLabel(item.label) : setLabel('');
    console.log(item);
  }, [item]);

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
        <button id={item ? "action_edit" : "action_add" }  className="action" type="submit">
            {item ? 'Edit' : 'Add'}
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
