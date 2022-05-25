import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { TaskListContext } from '../../context/TaskListContext';

import './Priority.css';

export default function Priority({ isOpen, close }) {
  // handle ARIA attributes
  // prevent body from scrolling when popup is open
  useEffect(() => {
    const body = document.querySelector('body');
    const popup = document.getElementById('priority');
    // const inputsRadio = document.querySelectorAll('[type="radio"]')

    isOpen && body.setAttribute('arias-hidden', 'true');
    isOpen && popup.setAttribute('arias-hidden', 'false');
    isOpen && (body.style.overflow = 'hidden');
    // console.log([...inputsRadio].map((input) => input.value))

    !isOpen && body.setAttribute('arias-hidden', 'false');
    !isOpen && (body.style.overflow = 'unset');
  }, [isOpen]);

  // popup DOM parent for portal assignation
  const DOMparent = document.getElementById('root');

  const { isEdited, updateTask } = useContext(TaskListContext);

  function handlePriority(level) {
    isEdited && updateTask(isEdited.id, isEdited.label, level);
    setTimeout(close, 500);
  }

  return createPortal(
    <>
      {isOpen ? (
        <main autoFocus className="popup" id="priority" role="main">
          <fieldset className="popup_content">
            <legend className="popup_title">PRIORITY</legend>

            <div
              className="popup_item popup_item-hight popup_close"
              onClick={() => handlePriority('hight')}
            >
              <label htmlFor="hight" className="popup_label">
                hight
              </label>
              <input type="radio" id="hight" name="priority" value="hight" />
              <span className="checkmark"></span>
            </div>

            <div
              className="popup_item popup_item-medium popup_close"
              onClick={() => handlePriority('medium')}
            >
              <label htmlFor="medium" className="popup_label">
                medium
              </label>
              <input type="radio" id="medium" name="priority" value="medium" />
              <span className="checkmark"></span>
            </div>

            <div
              className="popup_item popup_item-low popup_close"
              onClick={() => handlePriority('low')}
            >
              <label htmlFor="low" className="popup_label">
                low
              </label>
              <input type="radio" id="low" name="priority" value="low" />
              <span className="checkmark"></span>
            </div>
          </fieldset>
        </main>
      ) : null}
    </>,
    DOMparent
  );
}
