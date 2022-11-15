import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, postProject } from '../../../storeApi/storeApi';
import Stopwatch from '../../Stopwatch/Stopwatch';
import styles from './projectPage.module.css';

const ProjectPage = () => {
  const { pathname } = useLocation();
  // @ts-ignore
  const projectId = parseInt(pathname.match(/\d+/));
  // @ts-ignore
  const projects = useSelector(state => state.projects);
  // @ts-ignore
  const dispatch = useDispatch();
  const project = projects.find((project: { id: number }) => +project.id === projectId);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProjects());
  }, []);

  useEffect(() => {
    return () => {
      if (project) {
        // @ts-ignore
        dispatch(postProject(project, projectId.toString()));
      }
    };
  }, [projects]);

  return (
    <section className={styles.projectPage__wrapper}>
      <div className={styles.projectPage}>
        <h1 className={styles.projectPage__title}>{project?.name}</h1>
        <Stopwatch projectId={projectId} />
      </div>
    </section>
  );
};

export default ProjectPage;
