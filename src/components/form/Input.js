import styles from "./Input.module.css";

function Input ({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" />
    </div>
  )
}

export default Input;
