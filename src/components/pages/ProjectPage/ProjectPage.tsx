import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, postProject } from '../../../storeApi/storeApi';
import Stopwatch from '../../Stopwatch/Stopwatch';
import styles from './projectPage.module.css';
import { toast } from 'react-toastify';

const ProjectPage = () => {
  const { pathname } = useLocation();
  // @ts-ignore
  const projectId = parseInt(pathname.match(/\d+/));
  // @ts-ignore
  const projects = useSelector(state => state.projects);
  // @ts-ignore
  const dispatch = useDispatch();
  const project = projects.find((project: { id: number }) => +project.id === projectId);
  const [task, setTask] = useState({ id: null, text: '' });

  async function onAddHandle(e: any) {
    e.preventDefault();
    if (validateInput()) {
      await project.tasks.unshift({ ...task, id: project.tasks[0] ? project.tasks[0].id + 1 : 1 });
      // @ts-ignore
      await dispatch(postProject(project, projectId.toString()));
      // @ts-ignore
      dispatch(fetchProjects());
      toast.success('Task successfully created!', {
        theme: 'colored',
      });
      clearText();
    } else {
      toast.error('Fill the input!', {
        theme: 'colored',
      });
    }
  }

  async function onDeleteBtn(e: any) {
    e.preventDefault();
    project.tasks = await project.tasks.filter((tsk: { id: number }) => tsk.id !== +e.target.closest('li').dataset.id);
    // @ts-ignore
    await dispatch(postProject(project, projectId.toString()));
    // @ts-ignore
    dispatch(fetchProjects());
    toast.error('Task successfully deleted!', {
      theme: 'colored',
    });
  }

  function validateInput() {
    return task.text.trim();
  }

  function clearText() {
    setTask({ ...task, text: '' });
  }

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
        <h2 className={styles.projectPage__subtitle}>Tasks</h2>
        <ul className={styles.projectPage__list}>
          <li className={styles.projectPage__itemAdd}>
            <form className={styles.projectPage__form}>
              <label className={styles.projectPage__label}>
                <input
                  className={styles.projectPage__input}
                  type="text"
                  placeholder={'Type short type description and press Enter'}
                  value={task.text}
                  onChange={e => {
                    setTask({ ...task, text: e.target.value });
                  }}
                />
                <button className={styles.projectPage__addBtn} type={'submit'} onClick={onAddHandle} />
              </label>
            </form>
          </li>
          {project?.tasks.map((task: { text: string; id: number }, index: number) => {
            return (
              <li className={styles.projectPage__item} key={index} data-id={task.id}>
                <p>{task.text}</p>
                <button className={styles.projectPage__dltBtn} type={'button'} onClick={onDeleteBtn} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProjectPage;
