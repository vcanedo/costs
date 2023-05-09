import styles from '../project/ProjectCard.module.css'

function ServiceCard({id, name, cost, description, handelRemove}) {
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
    </div>
  )
}

export default ServiceCard;
