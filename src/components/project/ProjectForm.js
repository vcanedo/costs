import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Project Name"
        name="name"
        placeholder="Insert project name"
      />
      <Input
        type="number"
        text="Project's budget"
        name="budget"
        placeholder="Insert project's total budget"
      />
      <Select name="category_id" text="Select category" />
      <SubmitButton text={btnText} />
    </form>
  )

}

export default ProjectForm;
