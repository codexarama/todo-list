import TaskListProvider from '../../context/TaskListContext';

import Header from '../Header';
import TaskList from '../TaskList';

import './App.css';

function App() {
  return (
    <TaskListProvider>
      <Header />
      <main id="tasks">
        <TaskList />
      </main>
    </TaskListProvider>
  );
}

export default App;
