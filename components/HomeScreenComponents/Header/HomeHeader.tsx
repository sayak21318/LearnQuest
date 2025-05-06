import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Avatar } from 'react-native-paper';
import { useUser } from '@clerk/clerk-expo';

const HomeHeader = () => {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <View>
        <ThemedText type="default">Hello</ThemedText>
        <ThemedText type="defaultSemiBold">{user?.fullName}</ThemedText>
      </View>
      <Avatar.Image
        size={40}
        source={{
          uri: user?.imageUrl,
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
  loadingContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
