import React, { useEffect, useRef, useState } from 'react';
import styles from './stopwatch.module.css';
import { startStopwatch, stopStopwatch } from '../../stopwatchAsync/stopwatchAsync';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_STOPWATCH } from '../../store/actionCreator';

const Stopwatch = () => {
  const [paused, setPaused] = useState(false);

  // @ts-ignore
  const state = useSelector(state => state.stopwatch);
  const dispatch = useDispatch();
  let inter = useRef();

  function startHandle() {
    // @ts-ignore
    dispatch(startStopwatch(inter));
    setPaused(true);
  }

  function stopHandle() {
    // @ts-ignore
    dispatch(stopStopwatch(inter));
    setPaused(false);
  }

  function resetHandle() {
    dispatch({ type: RESET_STOPWATCH });
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
        <span className={styles.stopwatch__number}>{state.hours < 10 ? `0${state.hours}` : state.hours}</span>:
        <span className={styles.stopwatch__number}>{state.minutes < 10 ? `0${state.minutes}` : state.minutes}</span>:
        <span className={styles.stopwatch__number}>{state.seconds < 10 ? `0${state.seconds}` : state.seconds}</span>
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
