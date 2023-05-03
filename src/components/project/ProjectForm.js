import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, btnText, projectData }) {

  const [categories, setCategories] = useState([]);

  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
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
  }, [])

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Project Name"
        name="name"
        placeholder="Insert project name"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Project's budget"
        name="budget"
        placeholder="Insert project's total budget"
        handleOnChange={handleChange}
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
