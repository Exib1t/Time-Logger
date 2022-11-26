import React, { useState } from 'react';
import ProjectsList from '../../ProjectsList/ProjectsList';
import ProjectCreateModal from '../../ProjectCreateModal/ProjectCreateModal';
import styles from './projectsPage.module.css';
import ProjectSettingsModal from '../../ProjectSettingsModal/ProjectSettingsModal';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../../../storeApi/storeApi';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const [createModal, setCreateModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState({ visibility: false });

  function addNewProject() {
    setCreateModal(true);
  }

  function onRefreshClick() {
    // @ts-ignore
    dispatch(fetchProjects());
  }

  function onSettingsHandle(e: any) {
    e.target.classList.contains('settings-button') && setSettingsModal({ ...settingsModal, visibility: true });
  }

  return (
    <div className={styles.projectsPage} onClick={onSettingsHandle}>
      <div className={styles.projectsPage__controls}>
        <div className={styles.projectsPage__controlsInner}>
          <button className={styles.projectsList__refreshBtn} onClick={onRefreshClick} />
          <button className={styles.projectsList__addBtn} onClick={addNewProject}>
            New Project
          </button>
        </div>
      </div>
      <ProjectsList />
      <ProjectCreateModal state={createModal} setState={setCreateModal} />
      <ProjectSettingsModal state={settingsModal} setState={setSettingsModal} />
    </div>
  );
};

export default ProjectsPage;
