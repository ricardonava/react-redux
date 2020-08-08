// localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    console.log("LOAD ", serializedState);

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// localStorage.js
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("STATE", state);
    localStorage.setItem("state", serializedState);
    console.log("SAVE ", serializedState);
  } catch {
    // ignore write errors
  }
};
