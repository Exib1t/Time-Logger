export const getNewProjectId = (state: [any]): string => {
  // @ts-ignore
  if (state.length) {
    console.log('true');
    return (+state[state.length - 1].id + 1).toString();
  } else {
    console.log('false');
    // @ts-ignore
    return state.length.toString();
  }
};
