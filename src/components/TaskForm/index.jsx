import { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

import icon_check from '../../assets/icon_check.svg';

import './TaskForm.css';

export default function TaskForm() {
  const { addTask, isEdited, updateTask, isCleared, clearList } =
    useContext(TaskListContext);

  const [label, setLabel] = useState('');
  const refLabel = useRef(label);

  useEffect(() => {
    refLabel.current = label;
  });

  function handleChange(event) {
    event.preventDefault();
    setLabel(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    !isEdited ? (addTask(label), setLabel('')) : updateTask(isEdited.id, label);
  }

  // console.log(label);

  useEffect(() => {
    isEdited ? setLabel(isEdited.label) : setLabel('');
    // console.log(isEdited);
  }, [isEdited]);

  function handleClear() {
    clearList();
  }

  return (
    <form onSubmit={handleSubmit} action="?">
      <label htmlFor="add_task" />
      <input
        id="add_task"
        type="text"
        placeholder="New task"
        value={label}
        onChange={handleChange}
        aria-required="true"
        required
      />
      <section id="actions">
        <button id={isEdited ? 'action_update' : 'action_add'} type="submit">
          {isEdited ? 'Update' : 'Add'}
        </button>
        {!isCleared ? (
          <button id="action_clear" onClick={handleClear}>
            Clear
          </button>
        ) : (
          <div id="no_task" aria-labelledby="status-information">
            <span id="status-information">
              No tasks
              <img src={icon_check} alt="icon check" id="icon_check" />
            </span>
          </div>
        )}
      </section>
    </form>
  );
}
