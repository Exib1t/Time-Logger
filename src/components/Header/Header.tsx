import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <ul className={styles.header}>
        <li className={styles.header__item}>
          <NavLink to={'/projects'} className={styles.header__link}>
            Projects
          </NavLink>
        </li>
        <li className={styles.header__item}>
          <NavLink to={'/test-timer'} className={styles.header__link}>
            Test Timer
          </NavLink>
        </li>
        <li className={styles.header__item}>
          <NavLink to={'/my-account'} className={[styles.header__link, styles.noBorder].join(' ')}>
            My account
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
