// @ts-nocheck
import { BackHandler, Pressable, StyleSheet } from 'react-native';
import React, { useCallback, useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import HomeHeader from '@/components/HomeScreenComponents/Header/HomeHeader';
import { useFocusEffect } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { GlobalProvider } from '@/context/GlobalContext';
import SemesterDropdown from '@/components/HomeScreenComponents/SemesterDropdown/SemesterDropdown';
import SubjectList from '@/components/HomeScreenComponents/SubjectList/SubjectList';

const HomeScreen = () => {
  const { setShowSnackbar, setSnackBarColor, setSnackbarTxt } =
    useContext(GlobalProvider);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectSemester, setSelectSemester] = useState('Select Semester');

  // Set up the back button handling logic
  useFocusEffect(
    useCallback(() => {
      let lastBackPressed = 0;
      const backAction = () => {
        const currentTime = new Date().getTime();
        if (currentTime - lastBackPressed < 2000) {
          BackHandler.exitApp();
        } else {
          lastBackPressed = currentTime;
          setShowSnackbar(true);
          setSnackBarColor(Colors.appColors.stormGray);
          setSnackbarTxt('Press back again to exit');
        }
        return true;
      };
      // Add event listener for hardware back press
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
      // Remove the event listener when the component is unmounted or loses focus
      return () => backHandler.remove();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        {/* --------------- header -------------- */}
        <HomeHeader />

        {/* --------------- semester dropdown -------------- */}
        <SemesterDropdown
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          selectSemester={selectSemester}
          setSelectSemester={setSelectSemester}
        />

        {/* --------------- subject list -------------- */}
        <SubjectList selectedSemester={selectSemester} />
      </ThemedView>

      {toggleDropdown && (
        <Pressable
          style={StyleSheet.absoluteFill} // Full screen pressable overlay
          onPress={() => setToggleDropdown(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
