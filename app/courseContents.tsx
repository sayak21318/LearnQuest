import BackHeader from '@/components/Common/Header/BackHeader';
import CourseHeading from '@/components/CourseContentComponents/CourseHeading/CourseHeading';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AboutCourse from '@/components/CourseContentComponents/AboutCourse/AboutCourse';

const CourseContents = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        {/* ---------------- header ------------------ */}
        <BackHeader />

        {/* --------------- course heading -------------- */}
        <CourseHeading />

        {/* --------------- about course --------------- */}
        <AboutCourse />

        {/* --------------- course content --------------- */}
        {/* <CourseContentList /> */}
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
