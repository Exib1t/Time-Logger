import React, { useState } from 'react';
import styles from './projectCreateModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, postProject } from '../../storeApi/storeApi';
import { getNewProjectId } from '../../functions/getNewProjectId';

const ProjectCreateModal = ({ state, setState }: Modal) => {
  // @ts-ignore
  const projectsState = useSelector(state => state.projects);
  const dispatch = useDispatch();
  const [project, setProject] = useState({
    id: null,
    name: '',
    color: '#000000',
    logged: { seconds: 0, minutes: 0, hours: 0 },
    remaining: { seconds: 0, minutes: 0, hours: 0 },
  });

  function closeHandle() {
    setState(false);
  }

  function onSubmitHandle(e: any) {
    e.preventDefault();
    console.log(projectsState);
    if (validateData()) {
      // @ts-ignore
      dispatch(postProject(project, getNewProjectId(projectsState)));
      // @ts-ignore
      dispatch(fetchProjects());
      closeHandle();
      setProject({ ...project, name: '', color: '#000000' });
    }
  }

  function validateData() {
    return project.name.trim();
  }

  return (
    <section className={state ? styles.modal__wrapper : styles.hidden} onDoubleClick={closeHandle}>
      <div
        className={styles.modal}
        onDoubleClick={e => {
          e.stopPropagation();
        }}
      >
        <button className={styles.modal__closeBtn} onClick={closeHandle} />

        <h3 className={styles.modal__title}>Create a new project</h3>
        <form action="" className={styles.modal__form}>
          <label htmlFor="" className={styles.modal__label}>
            Name:
            <input
              type="text"
              placeholder={'Project name'}
              className={styles.modal__input}
              value={project.name}
              onChange={e => {
                setProject({ ...project, name: e.target.value });
              }}
              required
            />
          </label>
          <label htmlFor="" className={styles.modal__label}>
            Color:
            <input
              type="color"
              className={styles.modal__colorInput}
              value={project.color}
              onChange={e => {
                setProject({ ...project, color: e.target.value });
              }}
            />
          </label>
          <button type={'submit'} className={styles.modal__button} onClick={onSubmitHandle}>
            Create project
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProjectCreateModal;

interface Modal {
  state: boolean;
  setState: any;
}
