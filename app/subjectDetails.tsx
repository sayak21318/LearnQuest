// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  useColorScheme,
  Animated,
  FlatList,
  Pressable,
  Dimensions,
  Image,
  View,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import subjectsContent from '@/Data/subjectsContent.json';
import { useLocalSearchParams } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Chapter {
  id: number;
  title: string;
  content: string;
}

const ChapterDropdown = ({
  toggleDropdown,
  setToggleDropdown,
  selectChapter,
  setSelectChapter,
  chapters,
}: {
  toggleDropdown: boolean;
  setToggleDropdown: (value: boolean) => void;
  selectChapter: string;
  setSelectChapter: (value: string) => void;
  chapters: Chapter[];
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: toggleDropdown ? 0 : -100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [toggleDropdown]);

  const handleSelect = (title: string) => {
    setSelectChapter(title);
    setToggleDropdown(false);
  };

  return (
    <ThemedView
      style={{ marginVertical: 12 }}
      lightColor={Colors.appColors.lightAccent}
      darkColor={Colors.appColors.darkAccent}
    >
      <Pressable
        style={({ pressed }) => [
          styles.dropdownContainer,
          {
            backgroundColor: isDarkMode
              ? Colors.appColors.darkAccent
              : Colors.appColors.lightAccent,
          },
          pressed && { transform: [{ scale: 0.98 }] },
        ]}
        onPress={() => setToggleDropdown(!toggleDropdown)}
      >
        <ThemedText
          type="default"
          lightColor={Colors.appColors.lightText}
          darkColor={Colors.appColors.darkText}
        >
          {selectChapter}
        </ThemedText>
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
              backgroundColor: isDarkMode
                ? Colors.appColors.darkAccent
                : Colors.appColors.lightAccent,
              borderColor: isDarkMode
                ? Colors.appColors.darkBorder
                : Colors.appColors.lightBorder,
            },
          ]}
        >
          <FlatList
            data={chapters}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.suggestionItem,
                  selectChapter === `Chapter ${item.id}: ${item.title}` && {
                    backgroundColor: isDarkMode
                      ? Colors.appColors.darkBackground
                      : Colors.appColors.lightBackground,
                  },
                ]}
                onPress={() =>
                  handleSelect(`Chapter ${item.id}: ${item.title}`)
                }
              >
                <ThemedText
                  style={[
                    styles.suggestionText,
                    selectChapter === `Chapter ${item.id}: ${item.title}` && {
                      fontWeight: 'bold',
                    },
                  ]}
                  lightColor={Colors.appColors.lightText}
                  darkColor={Colors.appColors.darkText}
                >
                  {`Chapter ${item.id}: ${item.title}`}
                </ThemedText>
              </Pressable>
            )}
          />
        </Animated.View>
      )}
    </ThemedView>
  );
};

const SubjectDetails = () => {
  const { subjectId } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const subject = subjectsContent.subjects.find(
    s => s.id === Number(subjectId)
  );
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectChapter, setSelectChapter] = useState(
    subject?.chapters[0]
      ? `Chapter ${subject.chapters[0].id}: ${subject.chapters[0].title}`
      : 'Select Chapter'
  );

  if (!subject) {
    return (
      <ThemedView
        style={styles.container}
        lightColor={Colors.appColors.lightBackground}
        darkColor={Colors.appColors.darkBackground}
      >
        <ThemedText
          lightColor={Colors.appColors.lightText}
          darkColor={Colors.appColors.darkText}
        >
          Subject not found
        </ThemedText>
      </ThemedView>
    );
  }

  const currentChapter = subject.chapters.find(
    c => `Chapter ${c.id}: ${c.title}` === selectChapter
  );

  const markdownStyles = {
    body: {
      color: isDarkMode
        ? Colors.appColors.darkText
        : Colors.appColors.lightText,
      fontSize: 16,
    },
    heading1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      color: isDarkMode
        ? Colors.appColors.darkText
        : Colors.appColors.lightText,
    },
    heading2: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 8,
      color: isDarkMode
        ? Colors.appColors.darkText
        : Colors.appColors.lightText,
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
    code_block: {
      backgroundColor: '#1a1a1a',
      padding: 12,
      borderRadius: 8,
      marginVertical: 8,
      marginHorizontal: 0,
    },
    code_inline: {
      backgroundColor: '#1a1a1a',
      color: '#E6F0FA',
      paddingHorizontal: 4,
      borderRadius: 4,
      fontFamily: 'monospace',
    },
    text: {
      color: isDarkMode
        ? Colors.appColors.darkText
        : Colors.appColors.lightText,
      lineHeight: 24,
      marginVertical: 4,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginVertical: 10,
      alignSelf: 'center',
    },
    link: {
      color: isDarkMode
        ? Colors.appColors.darkAccent
        : Colors.appColors.lightAccent,
      textDecorationLine: 'underline',
    },
    list_item: {
      marginVertical: 4,
    },
    footnote: {
      fontSize: 14,
      color: isDarkMode
        ? Colors.appColors.darkText
        : Colors.appColors.lightText,
    },
  };

  const rules = {
    fence: (node, children, parent, styles) => {
      const codeContent = node.content?.trim() || '';
      if (!codeContent) {
        console.log('Skipping empty fence block:', node); // Debug log
        return null;
      }
      if (node.lang === 'math') {
        return (
          <ThemedView
            key={node.key}
            style={styles.mathBlock}
            lightColor="#e0e0e0"
            darkColor="#2a2a2a"
          >
            <ThemedText
              style={styles.mathText}
              lightColor={Colors.appColors.lightText}
              darkColor={Colors.appColors.darkText}
            >
              {codeContent}
            </ThemedText>
          </ThemedView>
        );
      }
      return (
        <View key={node.key} style={markdownStyles.code_block}>
          <ThemedText
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
              lineHeight: 20,
              backgroundColor: '#1a1a1a',
            }}
            lightColor="#E6F0FA"
            darkColor="#E6F0FA"
          >
            {codeContent}
          </ThemedText>
        </View>
      );
    },
    code_block: (node, children, parent, styles) => {
      const codeContent =
        node.content?.trim() ||
        (children && children.length > 0 ? children[0]?.content?.trim() : '') ||
        '';
      if (!codeContent) {
        console.log('Skipping empty code block:', node); // Debug log
        return null;
      }
      return (
        <View key={node.key} style={markdownStyles.code_block}>
          <ThemedText
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
              lineHeight: 20,
              backgroundColor: '#1a1a1a',
            }}
            lightColor="#E6F0FA"
            darkColor="#E6F0FA"
          >
            {codeContent}
          </ThemedText>
        </View>
      );
    },
    image: (node, children, parent, styles) => {
      const { src, alt } = node.attributes;
      console.log('Loading image:', { src, alt }); // Debug log
      return (
        <Image
          key={node.key}
          source={{ uri: src }}
          style={markdownStyles.image}
          accessibilityLabel={alt || 'Image'}
          onError={e =>
            console.log('Image load error:', src, e.nativeEvent.error)
          }
          defaultSource={{
            uri: 'https://via.placeholder.com/200?text=Image+Failed',
          }}
        />
      );
    },
  };

  const markdownRenderer = (content: string) => {
    console.log('Processing markdown:', content.substring(0, 100) + '...'); // Debug log
    let processedContent = content;
    // Replace **Math Example**: with fenced math block
    processedContent = processedContent.replace(
      /\*\*Math Example\*\*:([\s\S]*?)(?=\n\n|$)/g,
      (match, p1) => {
        const trimmed = p1.trim();
        if (!trimmed) {
          console.log('Skipping empty Math Example:', match); // Debug log
          return '';
        }
        return `\n\`\`\`math\n${trimmed}\n\`\`\`\n`;
      }
    );
    // Replace [math_example]...[/math_example] with fenced math block
    processedContent = processedContent.replace(
      /\[math_example\]([\s\S]*?)\[\/math_example\]/gs,
      (match, p1) => {
        const trimmed = p1.trim();
        if (!trimmed) {
          console.log('Skipping empty math_example:', match); // Debug log
          return '';
        }
        return `\n\`\`\`math\n${trimmed}\n\`\`\`\n`;
      }
    );
    return processedContent;
  };

  const renderJsonContent = (jsonString: string) => {
    try {
      const jsonObject = JSON.parse(jsonString);
      const formattedJson = JSON.stringify(jsonObject, null, 2);
      return (
        <View style={styles.jsonBlock}>
          <ThemedText
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
              lineHeight: 20,
              backgroundColor: '#1a1a1a',
            }}
            lightColor="#E6F0FA"
            darkColor="#E6F0FA"
          >
            {formattedJson}
          </ThemedText>
        </View>
      );
    } catch (error) {
      console.log('JSON parse error:', error); // Debug log
      return (
        <View style={styles.jsonBlock}>
          <ThemedText
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
              lineHeight: 20,
              backgroundColor: '#1a1a1a',
            }}
            lightColor="#E6F0FA"
            darkColor="#E6F0FA"
          >
            Invalid JSON: {jsonString}
          </ThemedText>
        </View>
      );
    }
  };

  const processContent = (content: string) => {
    const parts: JSX.Element[] = [];
    let remainingContent = content;
    let match;

    const jsonRegex = /\[json_example\]([\s\S]*?)\[\/json_example\]/gs;

    while ((match = jsonRegex.exec(remainingContent)) !== null) {
      const jsonContent = match[1].trim();
      const beforeJson = remainingContent.substring(0, match.index).trim();
      const afterJson = remainingContent
        .substring(match.index + match[0].length)
        .trim();

      if (beforeJson) {
        parts.push(
          <Markdown
            key={`markdown-${parts.length}`}
            style={markdownStyles}
            rules={rules}
            markdownitOptions={{ typographer: true }}
          >
            {markdownRenderer(beforeJson)}
          </Markdown>
        );
      }

      if (jsonContent) {
        parts.push(
          <View key={`json-${parts.length}`}>
            {renderJsonContent(jsonContent)}
          </View>
        );
      }

      remainingContent = afterJson;
    }

    if (remainingContent) {
      parts.push(
        <Markdown
          key={`markdown-${parts.length}`}
          style={markdownStyles}
          rules={rules}
          markdownitOptions={{ typographer: true }}
        >
          {markdownRenderer(remainingContent)}
        </Markdown>
      );
    }

    return parts.length > 0 ? (
      parts
    ) : (
      <ThemedText>No content to display</ThemedText>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView
        style={styles.container}
        lightColor={Colors.appColors.lightBackground}
        darkColor={Colors.appColors.darkBackground}
      >
        <ThemedText
          style={styles.header}
          lightColor={Colors.appColors.lightText}
          darkColor={Colors.appColors.darkText}
        >
          {subject.name}
        </ThemedText>
        <ChapterDropdown
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          selectChapter={selectChapter}
          setSelectChapter={setSelectChapter}
          chapters={subject.chapters}
        />
        <ScrollView style={styles.contentContainer}>
          {currentChapter && processContent(currentChapter.content)}
        </ScrollView>
        {toggleDropdown && (
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setToggleDropdown(false)}
          />
        )}
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  dropdownContainer: {
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
    borderRadius: 8,
    borderWidth: 1,
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
    borderBottomColor: Colors.appColors.lightBorder,
  },
  suggestionText: {
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
  },
  mathBlock: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  mathText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'monospace',
  },
  jsonBlock: {
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 0,
  },
});

export default SubjectDetails;
