import { useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {

  const [categories, setCategories] = useState([]);

  fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((resp) => resp.json())
  .then((data) => {
    setCategories(data)
  })
  .catch((err) => console.log(err))

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
      <Select
        name="category_id"
        text="Select category"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  )

}

export default ProjectForm;
