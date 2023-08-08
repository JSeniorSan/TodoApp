// подгрузка данных из локального хранилища
export const loadLocaleStorage = () => {
  try {
    // получение данных по уникальному ключу state
    const localState = localStorage.getItem("state");
    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (error) {
    return undefined;
  }
};
// запись новых данных в хранилище
export const saveLocaleStorage = (state) => {
  try {
    const savedState = JSON.stringify(state);
    // установка значения по уникальному ключу state
    localStorage.setItem("state", savedState);
  } catch (error) {
    console.log(error);
  }
};
