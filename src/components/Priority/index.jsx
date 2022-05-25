import './Priority.css';

export default function Priority() {
  return (
    <fieldset>
      <legend>PRIORITY</legend>

      <div>
        <input type="radio" id="hight" name="priority" value="hight" checked />
        <label for="hight">hight</label>
      </div>

      <div>
        <input type="radio" id="medium" name="priority" value="medium" />
        <label for="medium">medium</label>
      </div>

      <div>
        <input type="radio" id="low" name="priority" value="low" />
        <label for="low">low</label>
      </div>
      
    </fieldset>
  );
}
