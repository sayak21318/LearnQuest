// @ts-nocheck
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Pressable,
  Animated,
  useColorScheme,
} from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import semesters from '@/Data/semesters.json';

const SemesterDropdown = ({
  toggleDropdown,
  setToggleDropdown,
  selectSemester,
  setSelectSemester,
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const slideAnim = React.useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: toggleDropdown ? 0 : -100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [toggleDropdown]);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode
        ? Colors.appColors.darkAccent
        : Colors.appColors.lightAccent,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 3,
      shadowColor: Colors.appColors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    suggestionsContainer: {
      backgroundColor: isDarkMode
        ? Colors.appColors.darkAccent
        : Colors.appColors.lightAccent,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode
        ? Colors.appColors.darkBorder
        : Colors.appColors.lightBorder,
      shadowColor: Colors.appColors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
      maxHeight: Dimensions.get('window').height * 0.7,
      zIndex: 10,
      overflow: 'hidden',
    },
    suggestionItem: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode
        ? Colors.appColors.darkBorder
        : Colors.appColors.lightBorder,
    },
    suggestionText: {
      fontSize: 16,
      color: isDarkMode
        ? Colors.appColors.darkText
        : Colors.appColors.lightText,
    },
  });

  const handleSelect = name => {
    setSelectSemester(name);
    setToggleDropdown(false);
  };

  return (
    <ThemedView style={{ marginHorizontal: 16, marginTop: 12 }}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed && { transform: [{ scale: 0.98 }] },
        ]}
        onPress={() => setToggleDropdown(!toggleDropdown)}
      >
        <Text
          variant="labelLarge"
          style={{
            color: isDarkMode
              ? Colors.appColors.darkText
              : Colors.appColors.lightText,
          }}
        >
          {selectSemester}
        </Text>
        <Entypo
          size={24}
          color={
            isDarkMode ? Colors.appColors.darkText : Colors.appColors.lightText
          }
          name={toggleDropdown ? 'chevron-small-up' : 'chevron-small-down'}
        />
      </Pressable>

      {toggleDropdown && (
        <Animated.View
          style={[
            styles.suggestionsContainer,
            {
              transform: [{ translateY: slideAnim }],
              position: 'absolute',
              top: 60,
              left: 0,
              right: 0,
            },
          ]}
        >
          <FlatList
            data={semesters}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.suggestionItem,
                  selectSemester === item.name && {
                    backgroundColor: isDarkMode
                      ? Colors.appColors.darkBackground
                      : Colors.appColors.lightBackground,
                  },
                ]}
                onPress={() => handleSelect(item.name)}
              >
                <Text
                  style={[
                    styles.suggestionText,
                    selectSemester === item.name && { fontWeight: 'bold' },
                  ]}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </Animated.View>
      )}
    </ThemedView>
  );
};

export default SemesterDropdown;
