import React, { useEffect, useRef, useState } from 'react';
import styles from './projectSettingsModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, postProject } from '../../storeApi/storeApi';

const ProjectSettingsModal = ({ state, setState }: Modal) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const settings = useSelector(state => state.settings);
  // @ts-ignore
  const project = useSelector(state => state.projects).find(project => project.id === settings.id);
  const [editedProject, setEditedProject] = useState({
    id: '',
    name: '',
    color: '',
    logged: '',
    remaining: '',
  });
  const nameInput = useRef();

  function setColor(e: any) {
    setEditedProject({ ...editedProject, color: e.target.dataset.color });
  }

  function closeHandle() {
    setState({ ...state, visibility: false });
  }

  function validateData() {
    return editedProject.name.trim();
  }

  useEffect(() => {
    project && setEditedProject(project);
  }, [project]);

  function onSaveHandle(e: any) {
    e.preventDefault();
    if (validateData()) {
      // @ts-ignore
      dispatch(postProject(editedProject, settings.id));
      // @ts-ignore
      dispatch(fetchProjects());
      closeHandle();
    } else {
      // @ts-ignore
      nameInput.current.style.borderColor = 'red';
      // @ts-ignore
      nameInput.current.focus();
      setTimeout(() => {
        // @ts-ignore
        nameInput.current.style.borderColor = 'transparent';
      }, 500);
    }
  }

  return (
    <section className={state.visibility ? styles.modal__wrapper : styles.hidden} onDoubleClick={closeHandle}>
      <div
        className={styles.modal}
        onDoubleClick={e => {
          e.stopPropagation();
        }}
      >
        <button className={styles.modal__closeBtn} onClick={closeHandle} />

        <h3 className={styles.modal__title}>Project settings</h3>
        <form action="" className={styles.modal__form}>
          <label htmlFor="" className={styles.modal__label}>
            Name:
            <input
              // @ts-ignore
              ref={nameInput}
              type="text"
              placeholder={'Project name'}
              className={styles.modal__input}
              required
              value={editedProject.name}
              onChange={e => {
                setEditedProject({ ...editedProject, name: e.target.value });
              }}
            />
          </label>
          <label htmlFor="" className={styles.modal__label}>
            Color:
            <div className={styles.modal__row}>
              <input
                type="color"
                className={styles.modal__colorInput}
                value={editedProject.color}
                onChange={e => {
                  setEditedProject({ ...editedProject, color: e.target.value });
                }}
              />
              <button
                type={'button'}
                className={styles.modal__colorButton}
                data-color={'#a24242'}
                style={{ backgroundColor: '#a24242', marginLeft: '15px' }}
                onClick={setColor}
              />
              <button type={'button'} className={styles.modal__colorButton} data-color={'#48b048'} style={{ backgroundColor: '#48b048' }} onClick={setColor} />
              <button type={'button'} className={styles.modal__colorButton} data-color={'#fffd00'} style={{ backgroundColor: '#fffd00' }} onClick={setColor} />
              <button type={'button'} className={styles.modal__colorButton} data-color={'#4b4bc0'} style={{ backgroundColor: '#4b4bc0' }} onClick={setColor} />
              <button type={'button'} className={styles.modal__colorButton} data-color={'#8100ff'} style={{ backgroundColor: '#8100ff' }} onClick={setColor} />
            </div>
          </label>
          <button type={'submit'} className={styles.modal__button} onClick={onSaveHandle}>
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProjectSettingsModal;

interface Modal {
  state: { visibility: boolean };
  setState: any;
}
