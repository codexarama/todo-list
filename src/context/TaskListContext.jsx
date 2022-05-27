import { createContext, useState, useEffect } from 'react';

import { v1 as uuid } from 'uuid';

import { focusInput } from '../utils/handlers';

export const TaskListContext = createContext();

export default function TaskListProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);
  // console.table(tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  // console.table(tasks);

  function addTask(label) {
    setTasks([...tasks, { id: uuid(), label, priority: '' }]);
    setIsCleared(false);
    focusInput()
  }

  const [isEdited, setIsEdited] = useState(null);

  function findTask(id) {
    const task = tasks.find((task) => task.id === id);
    setIsEdited(task);
  }

  function updateTask(id, label, priority) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, label, priority } : task
    );
    setTasks(newTasks);
    setIsEdited(null);
    focusInput()
  }

  // console.log(tasks);

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    tasks.length === 0 && setIsCleared(true);
    // console.log(tasks.length, isCleared);
  }, [tasks]);

  function clearList() {
    setTasks([]);
    setIsCleared(true);
    focusInput()
  }

  const value = {
    tasks,
    addTask,
    isEdited,
    findTask,
    updateTask,
    removeTask,
    isCleared,
    clearList,
  };

  return (
    <TaskListContext.Provider value={value}>
      {children}
    </TaskListContext.Provider>
  );
}
