// @ts-nocheck
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokenCache } from '@/storage/cache';

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
  // const onPress = useCallback(async () => {
  //   try {
  //     const { createdSessionId, signIn, signUp, setActive } =
  //       await startOAuthFlow({
  //         redirectUrl: Linking.createURL('/homeScreen', { scheme: 'myapp' }),
  //       });
  //     console.log('createdSessionId', createdSessionId);
  //     // If sign in was successful, set the active session
  //     if (createdSessionId) {
  //       setActive!({ session: createdSessionId });
  //     } else {
  //       // Use signIn or signUp returned from startOAuthFlow
  //       // for next steps, such as MFA
  //     }
  //   } catch (err) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // }, []);

  // const onPress = useCallback(async () => {
  //   try {
  //     const { createdSessionId, setActive } = await startOAuthFlow({
  //       redirectUrl: Linking.createURL('/homeScreen', { scheme: 'myapp' }),
  //     });

  //     console.log('createdSessionId', createdSessionId);

  //     if (createdSessionId) {
  //       console.log('Setting active session...');
  //       await setActive!({ session: createdSessionId });
  //       console.log('Active session set successfully.');

  //       // Save the token in AsyncStorage
  //       try {
  //         await AsyncStorage.setItem('sessionId', createdSessionId);

  //         console.log(
  //           'Token saved in AsyncStorage ---->>>>:',
  //           createdSessionId
  //         );
  //       } catch (error) {
  //         console.error('Error saving token to AsyncStorage:', error);
  //       }
  //     } else {
  //       console.log('No createdSessionId returned. MFA might be required.');
  //     }
  //   } catch (err) {
  //     console.error('OAuth Flow Error:', JSON.stringify(err, null, 2));
  //   }
  // }, []);

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn, signUp } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL('/homeScreen', { scheme: 'myapp' }),
        });

      if (createdSessionId) {
        // Save session ID
        await AsyncStorage.setItem('sessionId', createdSessionId);
        setActive({ session: createdSessionId });
        console.log('Session ID saved in AsyncStorage:', createdSessionId);

        // Save token
        const token = await tokenCache.getToken('__clerk_client_jwt');
        if (token) {
          await AsyncStorage.setItem('token', token);
          console.log('Token saved in AsyncStorage:', token);
        }
      }
    } catch (error) {
      console.error('OAuth Flow Error:', error);
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
