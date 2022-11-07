import React from 'react';
import styles from './projectCard.module.css';
import { Link } from 'react-router-dom';

// @ts-ignore
const ProjectCard = ({ project }) => {
  const style = {
    backgroundColor: project.color,
  };

  return (
    <div className={styles.projectCard} style={style}>
      <h2 className={styles.projectCard__title}>{project.name}</h2>
      <span className={styles.projectCard__text}>
        Logged: {project.logged.hours < 10 ? `0${project.logged.hours}` : `${project.logged.hours}`}
        h:{project.logged.minutes < 10 ? `0${project.logged.minutes}` : `${project.logged.minutes}`}
        m:{project.logged.seconds < 10 ? `0${project.logged.seconds}` : `${project.logged.seconds}`}s
      </span>
      <span className={styles.projectCard__text}>
        Remaining: {project.remaining.hours < 10 ? `0${project.remaining.hours}` : `${project.remaining.hours}`}
        h:{project.remaining.minutes < 10 ? `0${project.remaining.minutes}` : `${project.remaining.minutes}`}
        m:{project.remaining.seconds < 10 ? `0${project.remaining.seconds}` : `${project.remaining.seconds}`}s
      </span>
      <Link to={project.name} className={styles.projectCard__btn}>
        Open
      </Link>
      <button className={styles.projectCard__dltBtn} />
    </div>
  );
};

export default ProjectCard;