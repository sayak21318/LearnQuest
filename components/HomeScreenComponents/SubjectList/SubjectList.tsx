import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import subjectsData from '@/Data/subjects.json';
import { router } from 'expo-router';

type SubjectListProps = {
  selectedSemester: string;
};

const SubjectList: React.FC<SubjectListProps> = ({ selectedSemester }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Find subjects for the selected semester
  const semester = subjectsData.semesters.find(
    sem => sem.name === selectedSemester
  );
  const subjects = semester ? semester.subjects : [];

  const renderSubject = ({
    item,
  }: {
    item: { id: number; name: string; image: string };
  }) => (
    <Pressable
      style={({ pressed }) => [
        styles.subjectContainer,
        {
          backgroundColor: isDarkMode
            ? Colors.appColors.darkAccent
            : Colors.appColors.lightAccent,
        },
        pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
      ]}
      onPress={() => {
        router.push({
          pathname: '/subjectDetails',
          params: { subjectId: item.id },
        });
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.subjectImage}
        resizeMode="contain"
      />
      <ThemedText style={styles.subjectName}>{item.name}</ThemedText>
    </Pressable>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={subjects}
        renderItem={renderSubject}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ThemedView style={styles.emptyContainer}>
            <ThemedText
              style={[
                styles.emptyText,
                {
                  color: isDarkMode
                    ? Colors.appColors.darkText
                    : Colors.appColors.lightText,
                },
              ]}
            >
              No Subjects found
            </ThemedText>
          </ThemedView>
        }
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  subjectContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
    elevation: 3,
    shadowColor: Colors.appColors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subjectImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  subjectName: {
    fontSize: 16,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyText: {
    fontSize: 18,
  },
});

export default SubjectList;
