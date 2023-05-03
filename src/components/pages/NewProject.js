import { useHistory } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {

  const history = useHistory();

  const createPost = (project) => {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      // redirect
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project to then add its services</p>
      <p>form</p>
      <ProjectForm btnText="Create Project" />
    </div>
  );
}

export default NewProject;
