import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

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

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL('/homeScreen', { scheme: 'myapp' }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

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
          // onPress={() => router.push('/homeScreen')}
          onPress={onPress}
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

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();
