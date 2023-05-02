import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project to then add its services</p>
      <p>form</p>
      <ProjectForm />
    </div>
  );
}

export default NewProject;
