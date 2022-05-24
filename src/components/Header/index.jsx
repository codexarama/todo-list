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
      <p className='task_count'>{`${tasks.length} todo`}</p>
    </header>
  );
}

export default React.memo(Header);
