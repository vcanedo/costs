import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../layout/Loading";
import Container from "../layout/Container";
import Message from "../layout/Message";
import ProjectForm from "../project/ProjectForm";
import ServiceForm from "../service/ServiceForm";

function Project() {
  const { id } = useParams()

  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {

    // GETTING PROJECT BY ID FOR EDITING
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((resp) => resp.json())
    .then((data) => {
      setProject(data)
    })
    .catch((err) => console.log(err))

  }, [id])

  function editPost(project) {
    setMessage('')
    // budget validation
    if(project.budget < project.cost) {
      setMessage('Budget cannot be less than utilized budget')
      setType('error')
      return false
    }

    // PATCH REQUEST TO EDIT PROJECT
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      setShowProjectForm(false)
      setMessage('Project updated successfully')
      setType('success')
    })
    .catch((err) => console.log(err))

  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
        <Container customClass="column">
          {message && <Message type={type} msg={message} />}
          <div className={styles.details_container}>
            <h1>Project: {project.name}</h1>
            <button className={styles.btn} onClick={toggleProjectForm}>
              {!showProjectForm ? 'Edit project' : 'Close'}
            </button>
            {!showProjectForm ? (
              <div className={styles.project_info}>
                <p>
                  <span>Category:</span> {project.category.name}
                </p>
                <p>
                  <span>Budget:</span> ${project.budget}
                </p>
                <p>
                  <span>Utilized budget:</span> ${project.cost}
                </p>
              </div>
            ) : (
              <div className={styles.project_info}>
                <ProjectForm
                  handleSubmit={editPost}
                  btnText="Conclude edit"
                  projectData={project}
                />
              </div>
            )}
          </div>
          <div className={styles.service_form_container}>
            <h2>Add a service:</h2>
            <button className={styles.btn} onClick={toggleServiceForm}>
              {!showServiceForm ? 'Add service' : 'Close'}
            </button>
            <div className={styles.project_info}>
              {showServiceForm && (
                <ServiceForm  />
              )}
            </div>
          </div>
          <h2>Services</h2>
          <Container customClass="start">
            <p>Service items</p>
          </Container>
        </Container>
      </div>

      ):(
        <Loading />
      )}
    </>
  )
}

export default Project;
