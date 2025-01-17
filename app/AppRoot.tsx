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
  useEffect(() => {
    const fetchToken = async () => {
      if (tokenCache) {
        const fetchedToken = await tokenCache.getToken('token'); // Replace with your key
        setToken(fetchedToken);
        console.log('Fetched Token:', fetchedToken);
      }
    };
    fetchToken();
  }, []);

  console.log('token', token);

  // Handle navigation AFTER everything is loaded
  useEffect(() => {
    if (isLoaded && fontsLoaded) {
      if (user) {
        router.replace('/homeScreen');
      } else {
        router.replace('/');
      }
    }
  }, [user, isLoaded, fontsLoaded]);

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
