import { createContext, useState } from 'react';
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
  }

  const [item, setItem] = useState(null);

  function findTask(id) {
    const task = tasks.find(task => task.id === id)
    setItem(task)
  }

  function editTask(id, label) {
    const newTasks = tasks.map(task => task.id === id ? {id, label} : task)
    setTasks(newTasks)
  }

console.log(tasks);

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearList() {
    setTasks([]);
  }

  const value = { tasks, addTask, item, findTask, editTask, removeTask, clearList };

  return (
    <TaskListContext.Provider value={value}>
      {children}
    </TaskListContext.Provider>
  );
}
