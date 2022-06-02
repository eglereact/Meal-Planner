export const addItemToLocalStorage = (keyName, value) => {
  localStorage.setItem(keyName, JSON.stringify(value));
};

export const getItemFromLocalStorage = (keyName, value) => {
  const result = localStorage.getItem(keyName);
  const item = result ? JSON.parse(result) : value;
  return item;
};
