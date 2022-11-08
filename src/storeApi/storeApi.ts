import db from '../firebase.config';
import { deleteDoc, doc } from 'firebase/firestore';
import { FETCH_PROJECTS } from '../store/actionCreator';

export const fetchProjects = () => {
  return async (dispatch: any) => {
    const projects: any = [];
    const response = db.collection('projects');
    const data = await response.get();
    data.docs.forEach(item => {
      // @ts-ignore
      projects.push(item.data());
    });
    dispatch({ type: FETCH_PROJECTS, payload: projects });
  };
};

export const postProject = (project: any, id: string) => {
  return async (dispatch: any) => {
    project.id = id;
    const response = db.collection('projects');
    const data = await response.doc(id).set(project);
  };
};

export const deleteProject = (id: string) => {
  return async (dispatch: any) => {
    await deleteDoc(doc(db, 'projects', id));
  };
};
