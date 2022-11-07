import React from 'react';
import styles from './projectCreateModal.module.css';

const ProjectCreateModal = ({ state, setState }: Modal) => {
  function closeHandle() {
    setState(false);
  }

  return (
    <section className={state ? styles.modal__wrapper : styles.hidden} onDoubleClick={closeHandle}>
      <div
        className={styles.modal}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <button className={styles.modal__closeBtn} onClick={closeHandle} />

        <h3 className={styles.modal__title}>Create a new project</h3>
        <form action="" className={styles.modal__form}>
          <label htmlFor="" className={styles.modal__label}>
            Name:
            <input type="text" placeholder={'Project name'} className={styles.modal__input} />
          </label>
          <label htmlFor="" className={styles.modal__label}>
            Color:
            <input type="color" value={'#efad10'} className={styles.modal__colorInput} />
          </label>
          <button type={'submit'} className={styles.modal__button}>
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
