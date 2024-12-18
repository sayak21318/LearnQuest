import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('@/assets/images/education.png')}
        style={styles.bannerImg}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  bannerImg: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    elevation: 5,
  },
});
