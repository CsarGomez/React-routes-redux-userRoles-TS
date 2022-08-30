export const persistLocalStorage = <T,>(key: string, value: T) => {
  localStorage.setItem('user', JSON.stringify({ ...value }));
};
export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
