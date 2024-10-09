import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InputText from '../../components/InputText/InputText';
import ChevronLeft from '../../assets/Icon/ChevronLeft';
import ShoppingCart from '../../assets/Icon/ShoppingCart';
import {DATA} from '../../Data/Alldata';
import LastSearchItem from '../../components/LastSearchItem/LastSearchItem';

const SearchScreen = ({navigation}) => {
  const {search} = DATA;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ChevronLeft />
        </TouchableOpacity>
        <Text style={styles.text}>{search.title}</Text>
        <ShoppingCart />
      </View>
      <InputText />

      <LastSearchItem />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '90%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
