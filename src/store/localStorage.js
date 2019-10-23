export const loadState = namespace => {
  try {
    const serializedState = localStorage.getItem(namespace);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (namespace, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(namespace, serializedState);
  } catch {
    // ignore write errors
  }
};

