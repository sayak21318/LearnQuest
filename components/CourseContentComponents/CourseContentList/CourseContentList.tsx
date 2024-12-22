import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CourseContentList = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      paddingHorizontal: 15,
    },
    card: {
      backgroundColor:
        colorScheme === 'dark'
          ? Colors.appColors.cahrcoal
          : Colors.appColors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    cardLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">Course Content</ThemedText>
      {/* ---------- course content list ---------- */}
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text
            variant="headlineMedium"
            style={{
              color:
                colorScheme === 'dark'
                  ? Colors.appColors.lightGray
                  : Colors.appColors.ashGray,
            }}
          >
            01
          </Text>
          <ThemedText type="defaultSemiBold">Introduction</ThemedText>
        </View>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.primary}
          size={24}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text
            variant="headlineMedium"
            style={{
              color:
                colorScheme === 'dark'
                  ? Colors.appColors.lightGray
                  : Colors.appColors.ashGray,
            }}
          >
            01
          </Text>
          <ThemedText type="defaultSemiBold">Introduction</ThemedText>
        </View>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.primary}
          size={24}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text
            variant="headlineMedium"
            style={{
              color:
                colorScheme === 'dark'
                  ? Colors.appColors.lightGray
                  : Colors.appColors.ashGray,
            }}
          >
            01
          </Text>
          <ThemedText type="defaultSemiBold">Introduction</ThemedText>
        </View>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.primary}
          size={24}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text
            variant="headlineMedium"
            style={{
              color:
                colorScheme === 'dark'
                  ? Colors.appColors.lightGray
                  : Colors.appColors.ashGray,
            }}
          >
            01
          </Text>
          <ThemedText type="defaultSemiBold">Introduction</ThemedText>
        </View>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.primary}
          size={24}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text
            variant="headlineMedium"
            style={{
              color:
                colorScheme === 'dark'
                  ? Colors.appColors.lightGray
                  : Colors.appColors.ashGray,
            }}
          >
            01
          </Text>
          <ThemedText type="defaultSemiBold">Introduction</ThemedText>
        </View>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.primary}
          size={24}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text
            variant="headlineMedium"
            style={{
              color:
                colorScheme === 'dark'
                  ? Colors.appColors.lightGray
                  : Colors.appColors.ashGray,
            }}
          >
            01
          </Text>
          <ThemedText type="defaultSemiBold">Introduction</ThemedText>
        </View>
        <MaterialCommunityIcons
          name="play-circle"
          color={Colors.appColors.primary}
          size={24}
        />
      </View>
    </View>
  );
};

export default CourseContentList;
