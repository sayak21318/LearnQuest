// @ts-nocheck
import { BackHandler, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import HomeHeader from '@/components/HomeScreenComponents/Header/HomeHeader';
import SearchBar from '@/components/HomeScreenComponents/SearchBar/SearchBar';
import Banner from '@/components/HomeScreenComponents/Banner/Banner';
import VideoCourse from '@/components/HomeScreenComponents/VideoCourse/VideoCourse';
import PopularCourse from '@/components/HomeScreenComponents/PopularCourse/PopularCourse';
import AdvancedCourses from '@/components/HomeScreenComponents/AdvancedCourses/AdvancedCourses';
import { useFocusEffect } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { GlobalProvider } from '@/context/GlobalContext';

const HomeScreen = () => {
  const { setShowSnackbar, setSnackBarColor, setSnackbarTxt } =
    useContext(GlobalProvider);

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

  const components = [
    { id: '1', component: <SearchBar /> },
    { id: '2', component: <Banner /> },
    { id: '3', component: <VideoCourse /> },
    { id: '4', component: <PopularCourse /> },
    { id: '5', component: <AdvancedCourses /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        {/* --------------- header -------------- */}
        <HomeHeader />

        <FlatList
          data={components}
          keyExtractor={item => item.id}
          renderItem={({ item }) => item.component}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
