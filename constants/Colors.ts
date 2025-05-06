/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#F6F8FC',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  appColors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#007AFF', // Vibrant blue
    secondary: '#FF9500', // Warm orange
    lightBackground: '#F7F7F7', // Off-white for light mode
    lightText: '#1A1A1A', // Dark gray for light mode text
    lightBorder: '#E0E0E0', // Subtle gray for borders
    lightAccent: '#E6F0FA', // Light blue for backgrounds
    darkBackground: '#121212', // Deep dark for dark mode
    darkText: '#E0E0E0', // Light gray for dark mode text
    darkBorder: '#333333', // Dark gray for borders
    darkAccent: '#1C2526', // Dark teal for backgrounds
    stormGray: '#6B7280', // Neutral gray for snackbar or neutral elements
  },
};
