// @ts-nocheck
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item) {
          console.log(`${key} was used 🔐`);
        } else {
          console.log('No values stored under key: ' + key);
        }
        return item;
      } catch (error) {
        console.error('AsyncStorage get item error: ', error);
        return null;
      }
    },
    saveToken: async (key: string, token: string) => {
      try {
        await AsyncStorage.setItem(key, token);
        console.log('Token saved in AsyncStorage:', token);
      } catch (error) {
        console.error('AsyncStorage set item error: ', error);
      }
    },
  };
};

export const tokenCache = createTokenCache();
