import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';

const NextButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text variant="titleSmall" style={styles.codeTxt}>
        Next
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: Colors.appColors.primary,
    borderWidth: 0.1,
    width: '90%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  codeTxt: {
    color: Colors.appColors.white,
    textAlign: 'center',
  },
});
