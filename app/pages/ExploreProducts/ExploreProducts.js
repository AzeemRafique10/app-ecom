import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ChevronLeft from '../../assets/Icon/ChevronLeft';
import ShoppingCart from '../../assets/Icon/ShoppingCart';
import {useNavigation} from '@react-navigation/native';
import FilterBar from '../../components/Filter/Filters/Filters';
import Badge from '../../components/Badge/Badge';
import ExploreModel from './ExploreModel';

const ExploreProducts = () => {
  const navigation = useNavigation();

  const handleToBack = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.justify}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => handleToBack()}>
            <ChevronLeft />
          </TouchableOpacity>
          <ShoppingCart />
        </View>
        <View style={styles.text1}>
          <Text style={styles.texthead}>Headphone</Text>
        </View>
        <View style={styles.product_title1}>
          <Text style={styles.product_title}>TMA Wireless</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 41,
            marginTop: 10,
            gap: 3,
          }}></View>
        <FilterBar />
      </View>
      <ExploreModel />
    </View>
  );
};

export default ExploreProducts;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  justify: {width: '90%'},
  container: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {
    flexDirection: 'row',
    height: 23,
    alignItems: 'flex-end',
  },
  texthead: {fontSize: 16, textAlign: 'left', color: '#000'},
  product_title1: {
    flexDirection: 'row',
    height: 32,
    alignItems: 'flex-end',
  },
  product_title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
  },
});
