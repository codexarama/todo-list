import TaskListProvider from '../../context/TaskListContext';

import Header from '../Header';

import './App.css';

function App() {
  return (
    <TaskListProvider>
      <Header />
    </TaskListProvider>
  );
}

export default App;
