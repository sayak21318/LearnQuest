import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

const CourseDetails = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Python Basics</ThemedText>
      <ThemedText type="default">
        Python is a general-purpose, high-level programming language. Its design
        philosophy emphasizes code readability with its notable use of
        significant whitespace.
      </ThemedText>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
