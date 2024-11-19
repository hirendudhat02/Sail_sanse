import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return data;
    } else {
      return data;
    }
  } catch (e) {
    return null;
  }
};

export const setData = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const removeData = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
