import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

const AboutCourse = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">About Course</ThemedText>
      <ThemedText type="small">
        Python is a general-purpose, high-level programming language. Its design
        philosophy emphasizes code readability with its notable use of
        significant whitespace.
      </ThemedText>
    </View>
  );
};

export default AboutCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
