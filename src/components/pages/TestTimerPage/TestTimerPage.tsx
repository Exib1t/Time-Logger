import React from 'react';
import Stopwatch from '../../Stopwatch/Stopwatch';
import styles from './testTimerPage.module.css';

const TestTimerPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.page}>
        <Stopwatch />
      </div>
    </section>
  );
};

export default TestTimerPage;
