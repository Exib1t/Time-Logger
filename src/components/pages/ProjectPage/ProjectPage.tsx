import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, postProject } from '../../../storeApi/storeApi';
import Stopwatch from '../../Stopwatch/Stopwatch';
import styles from './projectPage.module.css';
import { SET_STOPWATCH } from '../../../store/actionCreator';

const ProjectPage = () => {
  const { pathname } = useLocation();
  // @ts-ignore
  const projectId = parseInt(pathname.match(/\d+/));
  // @ts-ignore
  const projects = useSelector(state => state.projects);
  // @ts-ignore
  const time = useSelector(state => state.stopwatch);
  const dispatch = useDispatch();
  const project = projects.find((project: { id: number }) => +project.id === projectId);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProjects());
  }, []);

  useEffect(() => {
    if (project) {
      dispatch({ type: SET_STOPWATCH, payload: project.logged });
    }
  }, [project]);

  useEffect(() => {
    if (project) {
      project.logged = time;
      // @ts-ignore
      dispatch(postProject(project, projectId.toString()));
    }
  }, [time]);

  return (
    <section className={styles.projectPage__wrapper}>
      <div className={styles.projectPage}>
        <h1 className={styles.projectPage__title}>{project?.name}</h1>
        <Stopwatch />
      </div>
    </section>
  );
};

export default ProjectPage;
