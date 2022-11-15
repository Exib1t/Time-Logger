import React, { useEffect, useRef, useState } from 'react';
import styles from './stopwatch.module.css';
import { startStopwatch, stopStopwatch } from '../../stopwatchAsync/stopwatchAsync';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_STOPWATCH_BY_PROJECTID } from '../../store/actionCreator';

const Stopwatch = ({ projectId }: any) => {
  const [paused, setPaused] = useState(false);
  // @ts-ignore
  const projects = useSelector(state => state.projects);
  const project = projects.find((project: { id: number }) => +project.id === projectId);
  // @ts-ignore
  const dispatch = useDispatch();
  let inter = useRef();

  function startHandle() {
    // @ts-ignore
    dispatch(startStopwatch(inter, projectId));
    setPaused(true);
  }

  function stopHandle() {
    // @ts-ignore
    dispatch(stopStopwatch(inter));
    setPaused(false);
  }

  function resetHandle() {
    dispatch({ type: RESET_STOPWATCH_BY_PROJECTID, payload: projectId.toString() });
  }

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(stopStopwatch(inter));
    };
  }, []);

  return (
    <section className={styles.stopwatch}>
      <div className={styles.stopwatch__row}>
        <span className={styles.stopwatch__number}>{project?.logged.hours < 10 ? `0${project?.logged.hours}` : project?.logged.hours}</span>:
        <span className={styles.stopwatch__number}>{project?.logged.minutes < 10 ? `0${project?.logged.minutes}` : project?.logged.minutes}</span>:
        <span className={styles.stopwatch__number}>{project?.logged.seconds < 10 ? `0${project?.logged.seconds}` : project?.logged.seconds}</span>
      </div>
      <div className={styles.stopwatch__row}>
        <button className={styles.stopwatch__button} onClick={resetHandle}>
          Reset
        </button>
        {paused ? (
          <button className={[styles.stopwatch__button, styles.stopwatch__stopBtn].join(' ')} onClick={stopHandle}>
            Stop
          </button>
        ) : (
          <button className={[styles.stopwatch__button, styles.stopwatch__startBtn].join(' ')} onClick={startHandle}>
            Start
          </button>
        )}
      </div>
    </section>
  );
};

export default Stopwatch;
