import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountPage from '../components/pages/AcoountPage/AccountPage';
import ProjectsPage from '../components/pages/ProjectsPage/ProjectsPage';
import TestTimerPage from '../components/pages/TestTimerPage/TestTimerPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/my-account'} element={<AccountPage />} />
        <Route path={'/test-timer'} element={<TestTimerPage />} />
        <Route path={'*'} element={<Navigate to={'/projects'} replace />} />
      </Routes>
    </>
  );
};

export default Router;
