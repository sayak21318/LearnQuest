// @ts-nocheck
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useUser } from '@clerk/clerk-expo';
import { tokenCache } from '@/storage/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const AppRoot = () => {
  const colorScheme = useColorScheme();

  const { user, isLoaded } = useUser();
  const [token, setToken] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide splash screen only when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Fetch token when the component mounts
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     if (tokenCache) {
  //       const fetchedToken = await tokenCache.getToken('token'); // Replace with your key
  //       setToken(fetchedToken);
  //       console.log('Fetched Token:', fetchedToken);
  //     }
  //   };
  //   fetchToken();
  // }, []);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const fetchedToken = await AsyncStorage.getItem('token');
  //       console.log('Fetched Token:', fetchedToken);
  //       setToken(fetchedToken);
  //     } catch (error) {
  //       console.error('Error fetching token from AsyncStorage:', error);
  //     }
  //   };
  //   fetchToken();
  // }, []);

  const fetchTokens = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const token = await AsyncStorage.getItem('token');
      console.log('Fetched Session ID:', sessionId);
      console.log('Fetched Token:', token);
      setToken(token);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTokens();
    }
  }, [user]);

  // Handle navigation AFTER everything is loaded
  useEffect(() => {
    if (isLoaded && fontsLoaded) {
      if (token) {
        router.replace('/homeScreen');
      } else {
        router.replace('/');
      }
    }
  }, [token, isLoaded, fontsLoaded]);

  // Wait until everything is loaded
  if (!fontsLoaded || !isLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="homeScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="courseContents"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="courseDescription"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppRoot;
