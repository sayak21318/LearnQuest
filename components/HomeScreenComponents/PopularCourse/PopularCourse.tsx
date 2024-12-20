import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import courses from '@/Data/courses.json';
import { Surface } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme.web';

const PopularCourse = () => {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 15,
      marginTop: 10,
    },
    listContainer: {
      gap: 10,
      marginTop: 10,
    },
    img: {
      height: '80%',
      width: '100%',
      borderRadius: 10,
    },
    surface: {
      height: 220,
      width: 250,
      borderRadius: 10,
      backgroundColor:
        colorScheme === 'dark'
          ? Colors.appColors.black
          : Colors.light.background,
      marginBottom: 5,
      marginHorizontal: 5,
    },
    content: {
      marginHorizontal: 10,
    },
  });
  return (
    <View style={styles.container}>
      {/* ------------ top view -------------- */}
      <TouchableOpacity onPress={() => router.back()}>
        <ThemedText type="subtitle" style={{ marginStart: 15 }}>
          Basic Popular Course
        </ThemedText>
      </TouchableOpacity>

      {/* ------------ course list ------------ */}
      <FlatList
        data={courses}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          return (
            <Surface style={styles.surface} elevation={2}>
              <TouchableOpacity onPress={() => router.push('/courseContents')}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={styles.content}>
                  <ThemedText type="default" style={{ fontWeight: 'bold' }}>
                    Basic Python
                  </ThemedText>
                  <ThemedText type="small">15 Lessons</ThemedText>
                </View>
              </TouchableOpacity>
            </Surface>
          );
        }}
      />
    </View>
  );
};

export default PopularCourse;
