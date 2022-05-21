import TaskListProvider from '../../context/TaskListContext';

import Header from '../Header';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';

import './App.css';

function App() {
  return (
    <TaskListProvider>
      <Header />
      <main id="tasks">
        <TaskForm />
        <TaskList />
      </main>
    </TaskListProvider>
  );
}

export default App;
