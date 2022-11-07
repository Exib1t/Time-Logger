import React, { useEffect, useState } from 'react';
import styles from './projectsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { CREATE_PROJECT, FETCH_PRODUCTS, GET_PROJECTS } from '../../store/actionCreator';
import db from '../../firebase.config';
import ProjectCreateModal from '../ProjectCreateModal/ProjectCreateModal';

const ProjectsList = () => {
  // @ts-ignore
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const item = {
    id: 1,
    name: 'ng',
    color: 'hsl(281, 52%, 63%)',
    logged: { seconds: 12, minutes: 4, hours: 26 },
    remaining: { seconds: 12, minutes: 6, hours: 12 },
  };

  async function addNewProject() {
    setModal(true);

    // const response = db.collection('projects');
    // const data = await response.get();
    // await db.collection('projects').doc(`${item.id}`).set(item);
    // getProjects();
  }

  async function getProjects() {
    const projects: any = [];
    const response = db.collection('projects');
    const data = await response.get();
    data.docs.forEach(item => {
      // @ts-ignore
      projects.push(item.data());
    });
    dispatch({ type: FETCH_PRODUCTS, payload: projects });
  }

  useEffect(() => {
    getProjects();
  }, []);

  // @ts-ignore
  return (
    <section className={styles.projectsList__wrapper}>
      <div className={styles.projectsList}>
        <button className={styles.projectsList__addBtn} onClick={addNewProject}>
          New Project
        </button>

        {projects.map((project: any, index: number) => {
          // @ts-ignore
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
      <ProjectCreateModal state={modal} setState={setModal} />
    </section>
  );
};

export default ProjectsList;
