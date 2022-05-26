import './Input.css';

export default function Input({ level, handlePriority }) {
  return (
    <label
      htmlFor={level}
      className={`popup_label popup_label-${level} popup_close`}
    >
      {level}
      <input
        type="radio"
        id={level}
        name="priority"
        value={level}
        onClick={handlePriority}
      />
      <span className="checkmark"></span>
    </label>
  );
}
