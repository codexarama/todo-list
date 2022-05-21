import icon_trash from '../../assets/icon_trash.svg';
import icon_edit from '../../assets/icon_edit.svg';

import './Task.css';

export default function Task({ task }) {
  return (
    <li className="list_item">
      <span className="list_item-label">{task.label}</span>
      <div className="list_item-action">
        <button className="btn_delete btn_task">
          <img src={icon_trash} alt="trash icon" />
        </button>
        <button className="btn_edit btn_task">
          <img src={icon_edit} alt="edit icon" />
        </button>
      </div>
    </li>
  );
}
