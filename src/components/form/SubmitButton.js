import styles from "./SubmitButton.module.css";

function SubmitButton ({ text }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Select an option</option>
      </select>
    </div>
  )
}

export default SubmitButton;
