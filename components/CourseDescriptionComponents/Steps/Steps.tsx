import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import { Colors } from '@/constants/Colors';

const Steps = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      alignItems: 'center',
      borderWidth: 0.1,
      flexDirection: 'row',
      gap: 5,
    },
    line: {
      flex: 1,
      height: 5,
      backgroundColor: Colors.appColors.primary,
      borderRadius: 15,
    },
  });
  return (
    <View style={styles.container}>
      <Divider style={styles.line} />
      <Divider style={styles.line} />
      <Divider style={styles.line} />
      <Divider style={styles.line} />
      <Divider style={styles.line} />
    </View>
  );
};

export default Steps;
