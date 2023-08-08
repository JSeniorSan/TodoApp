export const loadLocaleStorage = () => {
  try {
    const localState = localStorage.getItem("state");
    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (error) {
    return undefined;
  }
};

export const saveLocaleStorage = (state) => {
  try {
    const savedState = JSON.stringify(state);
    localStorage.setItem("state", savedState);
  } catch (error) {
    console.log(error);
  }
};
