import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Avatar } from 'react-native-paper';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText type="default">Hello</ThemedText>
        <ThemedText type="defaultSemiBold">Rahul Sanap</ThemedText>
      </View>
      <Avatar.Image
        size={40}
        source={{
          uri: 'https://randomuser.me/api/portraits/women/2.jpg',
        }}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
