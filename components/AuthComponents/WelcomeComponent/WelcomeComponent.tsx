import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
const WelcomeComponent = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        colorScheme === 'dark'
          ? Colors.dark.background
          : Colors.light.background,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      marginTop: -20,
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    bottomContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    authBtn: {
      backgroundColor: Colors.appColors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ThemedText type="title" style={{ textAlign: 'center' }}>
          Welcome to LearnQuest
        </ThemedText>
      </View>
      <View style={styles.bottomContainer}>
        <ThemedText type="subtitle" style={{ textAlign: 'center' }}>
          Login/Signup
        </ThemedText>
        <TouchableOpacity
          style={styles.authBtn}
          onPress={() => router.push('/homeScreen')}
        >
          <AntDesign name="google" size={24} color={Colors.light.background} />
          <ThemedText
            type="subtitle"
            style={{ textAlign: 'center', color: Colors.light.background }}
          >
            Sign In with Google
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WelcomeComponent;
