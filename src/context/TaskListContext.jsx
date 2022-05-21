import { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';

export const TaskListContext = createContext();

export default function TaskListProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'read' },
    { id: 2, label: 'wash' },
    { id: 3, label: 'learn' },
  ]);

  // console.table(tasks);

  function addTask(label) {
    setTasks([...tasks, { label, id: uuid() }]);
    setCleared(false);
  }

  const [editedTask, setEditedTask] = useState(null);

  function findTask(id) {
    const task = tasks.find((task) => task.id === id);
    setEditedTask(task);
  }

  function updateTask(id, label) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, label } : task
    );
    setTasks(newTasks);
    setEditedTask(null);
  }

  // console.log(tasks);

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    tasks.length === 0 && setCleared(true);
    // console.log(tasks.length, cleared);
  }, [tasks]);

  function clearList() {
    setTasks([]);
    setCleared(true);
  }

  const value = {
    tasks,
    addTask,
    editedTask,
    findTask,
    updateTask,
    removeTask,
    cleared,
    clearList,
  };

  return (
    <TaskListContext.Provider value={value}>
      {children}
    </TaskListContext.Provider>
  );
}
