import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Search from '../../assets/Icon/Search';

const InputText = ({onFocus}) => {
  return (
    <View style={styles.searchBar}>
      <Search />
      <TextInput onFocus={onFocus} style={styles.searchInput} placeholder="Search headphone" />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 45,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 1,
    margin: 10,
  },
  searchInput: {
    paddingHorizontal: 10,
    opacity: 0.7,
  },
});
