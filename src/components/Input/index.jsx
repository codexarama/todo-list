import './Input.css';

export default function Input({ level, handlePriority, isPriorized }) {
  return (
    <label
      htmlFor={level}
      className={
        isPriorized === level
          ? `priorized_${level} popup_label popup_label-${level}`
          : `popup_label popup_label-${level}`
      }
      aria-pressed={isPriorized ? "true" : "false"}
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
