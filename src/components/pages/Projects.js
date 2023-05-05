import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

import styles from "./Projects.module.css";

function Projects() {

  const location = useLocation()

  let message = ''
  if(location.state) {
    message = location.state.message
  }

  return (
    <div>
      <div>
        <h1>My Projects</h1>
        <LinkButton to="/newproject" text="Create Project" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Projects...</p>
      </Container>
    </div>
  );
}

export default Projects;
