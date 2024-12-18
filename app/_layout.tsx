import { PaperProvider } from 'react-native-paper';
import AppRoot from './AppRoot';
import GlobalContext from '@/context/GlobalContext';

export default function RootLayout() {
  return (
    <PaperProvider>
      <GlobalContext>
        <AppRoot />
      </GlobalContext>
    </PaperProvider>
  );
}
