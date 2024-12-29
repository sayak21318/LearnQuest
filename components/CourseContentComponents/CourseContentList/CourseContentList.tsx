import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

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
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/courseDescription')}
      >
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
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
      </TouchableOpacity>
    </View>
  );
};

export default CourseContentList;
