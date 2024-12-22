import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

const CourseHeading = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Python Basics</ThemedText>
      <ThemedText type="small">By Tubeguruji</ThemedText>
    </View>
  );
};

export default CourseHeading;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
