import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string = '') => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValueLocalStorge = (value: string) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteValueLocalStorge = () => {
    try {
      setStoredValue('');
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValueLocalStorge, deleteValueLocalStorge] as const;
};

export default useLocalStorage;
