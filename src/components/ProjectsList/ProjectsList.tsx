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
  const [modal, setModal] = useState(false);

  async function addNewProject() {
    setModal(true);
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProjects());
  }, []);

  return (
    <section className={styles.projectsList__wrapper}>
      <div className={styles.projectsList}>
        <button className={styles.projectsList__addBtn} onClick={addNewProject}>
          New Project
        </button>

        {projects.length ? (
          projects.map((project: any, index: number) => {
            // @ts-ignore
            return <ProjectCard project={project} key={index} />;
          })
        ) : (
          <span className={styles.projectsList__text}>You have no projects...</span>
        )}

        {}
      </div>
      <ProjectCreateModal state={modal} setState={setModal} />
    </section>
  );
};

export default ProjectsList;
