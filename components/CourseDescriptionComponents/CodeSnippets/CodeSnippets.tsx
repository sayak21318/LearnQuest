import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';

const CodeSnippets = () => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      paddingHorizontal: 15,
    },
    snippetContainer: {
      backgroundColor: Colors.appColors.deepEspresso,
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
    },
    codeTxt: {
      color: Colors.appColors.white,
    },
    runBtn: {
      backgroundColor: Colors.appColors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignSelf: 'flex-end',
      gap: 5,
    },
  });

  return (
    <View style={styles.container}>
      {/* ----------- snippet ------------ */}
      <View style={styles.snippetContainer}>
        <Text variant="titleSmall" style={styles.codeTxt}>
          x = 5
        </Text>
        <Text variant="titleSmall" style={styles.codeTxt}>
          y = 'John'
        </Text>
        <Text variant="titleSmall" style={styles.codeTxt}>
          print(type(x))
        </Text>
        <Text variant="titleSmall" style={styles.codeTxt}>
          print(type(y))
        </Text>
      </View>

      {/* ------- run button ------------ */}
      <TouchableOpacity style={styles.runBtn}>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.white}
          size={24}
        />
        <Text variant="titleSmall" style={styles.codeTxt}>
          Run
        </Text>
      </TouchableOpacity>

      {/* --------------- output --------- */}
      <ThemedText type="defaultSemiBold">Output</ThemedText>
      <View style={styles.snippetContainer}>
        <Text variant="titleSmall" style={styles.codeTxt}>
          x = 5
        </Text>
        <Text variant="titleSmall" style={styles.codeTxt}>
          y = 'John'
        </Text>
      </View>
    </View>
  );
};

export default CodeSnippets;
