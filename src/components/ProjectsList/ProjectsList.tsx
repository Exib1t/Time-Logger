import React, { useEffect, useState } from 'react';
import styles from './projectsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCreateModal from '../ProjectCreateModal/ProjectCreateModal';
import { fetchProjects } from '../../storeApi/storeApi';

const ProjectsList = () => {
  // @ts-ignore
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProjects());
  }, []);

  return (
    <section className={styles.projectsList__wrapper}>
      <div className={styles.projectsList}>
        {projects.length ? (
          projects.map((project: any, index: number) => {
            return <ProjectCard project={project} key={index} />;
          })
        ) : (
          <span className={styles.projectsList__text}>You have no projects...</span>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
