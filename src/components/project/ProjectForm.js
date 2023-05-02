import Input from "../form/Input";

import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Project Name"
        name="name"
        placeholder="Insert project name"
      />
      <div>
        <input type="number" placeholder="Insert total budget"/>
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Select Category
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Create Project" />
      </div>
    </form>
  )

}

export default ProjectForm;
