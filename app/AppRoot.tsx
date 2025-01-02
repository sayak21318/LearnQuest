import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useUser } from '@clerk/clerk-expo';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const AppRoot = () => {
  const colorScheme = useColorScheme();

  const { user, isLoaded } = useUser();

  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide splash screen only when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

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
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppRoot;
