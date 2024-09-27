import {StyleSheet, View} from 'react-native';
import React from 'react';
import Badge from '../../../components/Badge/Badge';
import Bannar from './Bannar';
import FeaturedProduct from '../FeaturedProduct';
import Cards from '../Cards';

const Models = () => {
  return (
    <View style={styles.container}>
      <Badge />
      <Bannar />
      <View style={{ alignItems: 'center'}}>
        <FeaturedProduct />
      </View>
      <Cards />
    </View>
  );
};

export default Models;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F3F3F4',
    width: '100%',
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
