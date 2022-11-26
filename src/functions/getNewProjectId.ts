export const getNewProjectId = (state: [any]): string => {
  // @ts-ignore
  if (state.length) {
    return (+state[state.length - 1].id + 1).toString();
  } else {
    // @ts-ignore
    return state.length.toString();
  }
};
