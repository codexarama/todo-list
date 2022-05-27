import { useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { TaskListContext } from '../../context/TaskListContext';

import Input from '../Input';

import './Priority.css';

export default function Priority({ isOpen, close }) {
  // handle ARIA attributes
  // prevent body from scrolling when popup is open
  useEffect(() => {
    const body = document.querySelector('body');
    const popup = document.getElementById('priority');

    isOpen && body.setAttribute('arias-hidden', 'true');
    isOpen && popup.setAttribute('arias-hidden', 'false');
    isOpen && (body.style.overflow = 'hidden');

    !isOpen && body.setAttribute('arias-hidden', 'false');
    !isOpen && (body.style.overflow = 'unset');
  }, [isOpen]);

  // popup DOM parent for portal assignation
  const DOMparent = document.getElementById('root');

  // handle priority
  const levels = ['hight', 'medium', 'low', 'none'];
  const { isEdited, updateTask } = useContext(TaskListContext);
  const [isPriorized, setIsPriorized] = useState(levels[0]);

  const handlePriority = useCallback((level) => {
    isEdited && updateTask(isEdited.id, isEdited.label, level);
    setIsPriorized(level);
    // console.log(level);
    setTimeout(close, 500);
  });

  return createPortal(
    <>
      {isOpen ? (
        <main autoFocus className="popup" id="priority" role="dialog">
          <fieldset className="popup_content">
            <legend className="popup_title">PRIORITY</legend>

            {levels.map((level) => {
              return (
                <Input
                  key={level}
                  level={level}
                  isPriorized={isPriorized}
                  handlePriority={() => handlePriority(level)}
                />
              );
            })}
          </fieldset>
        </main>
      ) : null}
    </>,
    DOMparent
  );
}
