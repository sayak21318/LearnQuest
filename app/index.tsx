import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopImage from '@/components/AuthComponents/TopImage/TopImage';
import WelcomeComponent from '@/components/AuthComponents/WelcomeComponent/WelcomeComponent';

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        {/* ---------- top image ---------- */}
        <TopImage />

        {/* ---------- welcome component ---------- */}
        <WelcomeComponent />
      </ThemedView>
    </SafeAreaView>
  );
};

export default Index;
