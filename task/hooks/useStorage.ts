import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
  const setItem = async (key: string, value: string) => {
    try {
      // @ts-ignore
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  const getItem = async (key: string) => {
    try {
      // @ts-ignore
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error reading data', error);
      return null;
    }
  };

  const removeItem = async (key: string) => {
    try {
      // @ts-ignore
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data', error);
    }
  };

  return { setItem, getItem, removeItem };
}; 