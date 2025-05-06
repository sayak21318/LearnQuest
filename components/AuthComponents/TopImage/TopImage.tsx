import { Dimensions, Image, StyleSheet } from 'react-native';
import React from 'react';

const TopImage = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    reactLogo: {
      height: screenHeight * 0.3,
      width: screenWidth,
    },
  });
  return (
    <Image
      resizeMode="cover"
      source={require('@/assets/images/study.png')}
      style={styles.reactLogo}
    />
  );
};

export default TopImage;
