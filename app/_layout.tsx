import { PaperProvider } from 'react-native-paper';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import AppRoot from './AppRoot';
import GlobalContext from '@/context/GlobalContext';
import { tokenCache } from '@/storage/cache';
import { StatusBar } from 'expo-status-bar';
import SnackBar from '@/components/Common/SnackBar/SnackBar';

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <PaperProvider>
        <GlobalContext>
          <ClerkLoaded>
            <AppRoot />
            <StatusBar style="auto" />
            <SnackBar />
          </ClerkLoaded>
        </GlobalContext>
      </PaperProvider>
    </ClerkProvider>
  );
}
