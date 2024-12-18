import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import HomeHeader from '@/components/HomeScreenComponents/Header/HomeHeader';
import SearchBar from '@/components/HomeScreenComponents/SearchBar/SearchBar';
import Banner from '@/components/HomeScreenComponents/Banner/Banner';
import VideoCourse from '@/components/HomeScreenComponents/VideoCourse/VideoCourse';
import PopularCourse from '@/components/HomeScreenComponents/PopularCourse/PopularCourse';
import AdvancedCourses from '@/components/HomeScreenComponents/AdvancedCourses/AdvancedCourses';

const HomeScreen = () => {
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
