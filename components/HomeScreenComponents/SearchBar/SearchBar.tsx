import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar, Surface } from 'react-native-paper';
import { Colors } from '@/constants/Colors';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Surface elevation={2} style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchContainer}
      />
    </Surface>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: Colors.appColors.white,
    borderRadius: 10,
  },
  searchContainer: {
    backgroundColor: Colors.appColors.white,
  },
});
