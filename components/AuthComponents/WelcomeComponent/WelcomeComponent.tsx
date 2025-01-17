import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { AntDesign } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

const WelcomeComponent = () => {
  // color scheme hook
  const colorScheme = useColorScheme();

  // styles
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

  // calling useWarmUpBrowser to warm up the android browser
  useWarmUpBrowser();

  // OAuth Flow with Google
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  // function to handle the button press
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL('/homeScreen', { scheme: 'myapp' }),
        });
      console.log('createdSessionId', createdSessionId);
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

  // render the component
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
        <TouchableOpacity style={styles.authBtn} onPress={onPress}>
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

// function to warm up the android browser
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

// complete the auth session
WebBrowser.maybeCompleteAuthSession();
