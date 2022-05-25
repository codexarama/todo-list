import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Priority.css';

export default function Priority({ priority, close }) {
  // handle ARIA attributes
  // prevent body from scrolling when popup is open
  useEffect(() => {
    const body = document.querySelector('body');
    const popup = document.getElementById('priority');

    priority && body.setAttribute('arias-hidden', 'true');
    priority && popup.setAttribute('arias-hidden', 'false');
    priority && (body.style.overflow = 'hidden');

    !priority && body.setAttribute('arias-hidden', 'false');
    !priority && (body.style.overflow = 'unset');
  }, [priority]);

  // popup DOM parent for portal assignation
  const DOMparent = document.getElementById('root');

  return createPortal(
    <>
      {priority ? (
        <main autoFocus className="popup" id="priority" role="main">
          <fieldset className="popup_content">
            <legend className="popup_title">PRIORITY</legend>

            <div
              className="popup_item popup_item-hight popup_close"
              onClick={() => setTimeout(close, 500)}
            >
              <label htmlFor="hight" className="popup_label">
                hight
              </label>
              <input type="radio" id="hight" name="priority" value="hight" />
              <span className="checkmark"></span>
            </div>

            <div
              className="popup_item popup_item-medium popup_close"
              onClick={() => setTimeout(close, 500)}
            >
              <label htmlFor="medium" className="popup_label">
                medium
              </label>
              <input type="radio" id="medium" name="priority" value="medium" />
              <span className="checkmark"></span>
            </div>

            <div
              className="popup_item popup_item-low popup_close"
              onClick={() => setTimeout(close, 500)}
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
