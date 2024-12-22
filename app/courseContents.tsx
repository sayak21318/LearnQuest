import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import BackHeader from '@/components/Common/Header/BackHeader';
import CourseHeading from '@/components/CourseContentComponents/CourseHeading/CourseHeading';
import Banner from '@/components/HomeScreenComponents/Banner/Banner';
import AboutCourse from '@/components/CourseContentComponents/AboutCourse/AboutCourse';
import CourseContentList from '@/components/CourseContentComponents/CourseContentList/CourseContentList';

const CourseContents = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        {/* ---------------- header ------------------ */}
        <BackHeader />

        {/* --------------- course heading -------------- */}
        <CourseHeading />

        {/* --------------- banner --------------- */}
        <Banner />

        {/* --------------- about course --------------- */}
        <AboutCourse />

        {/* --------------- course content --------------- */}
        <CourseContentList />
      </ThemedView>
    </SafeAreaView>
  );
};

export default CourseContents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
