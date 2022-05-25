// import { useEffect } from 'react';
import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

function Header({ heading }) {
  const { tasks } = useContext(TaskListContext);

  // useEffect(() => {
  //   console.log('header is rendering');
  // }, []);

  return (
    <header aria-labelledby="page-title">
      <h1 tabIndex="0" id="page-title">
        {heading}
      </h1>
      <p tabIndex="0" className='task_count'>{`${tasks.length} to do`}</p>
    </header>
  );
}

export default React.memo(Header);
