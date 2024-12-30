import BackHeader from '@/components/Common/Header/BackHeader';
import CodeSnippets from '@/components/CourseDescriptionComponents/CodeSnippets/CodeSnippets';
import CourseDetails from '@/components/CourseDescriptionComponents/CourseDetails/CourseDetails';
import NextButton from '@/components/CourseDescriptionComponents/NextButton/NextButton';
import Steps from '@/components/CourseDescriptionComponents/Steps/Steps';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CourseDescription = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        {/* ---------------- header ------------------ */}
        <BackHeader />

        {/* ----------- steps ------------- */}
        <Steps />

        {/* ----------- course details ------------ */}
        <CourseDetails />

        {/* ----------- code snippets ------------ */}
        <CodeSnippets />

        {/* ------------ next btn ----------- */}
        <NextButton />
      </ThemedView>
    </SafeAreaView>
  );
};

export default CourseDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
