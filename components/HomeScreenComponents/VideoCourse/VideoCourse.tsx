import { FlatList, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import courses from '@/Data/courses.json';
import { Surface } from 'react-native-paper';
import { Colors } from '@/constants/Colors';

const VideoCourse = () => {
  return (
    <View style={styles.container}>
      {/* ------------ top view -------------- */}
      <ThemedText type="subtitle" style={{ marginStart: 15 }}>
        Video Course
      </ThemedText>

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
              <Image source={{ uri: item.image }} style={styles.img} />
            </Surface>
          );
        }}
      />
    </View>
  );
};

export default VideoCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  listContainer: {
    gap: 10,
    marginTop: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  surface: {
    height: 200,
    width: 250,
    borderRadius: 10,
    backgroundColor: Colors.appColors.white,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});
