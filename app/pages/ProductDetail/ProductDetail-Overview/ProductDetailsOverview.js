import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ChevronLeft from '../../../assets/Icon/ChevronLeft';
import ShoppingCart from '../../../assets/Icon/ShoppingCart';
import {useNavigation} from '@react-navigation/native';

const ProductDetailsOverview = () => {
  const navigation = useNavigation();
  const handleToBack = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{width: '95%'}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => handleToBack()}>
            <ChevronLeft />
          </TouchableOpacity>
          <ShoppingCart />
        </View>

        <View style={{height: 98, width: 327, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#0ACF83'}}>
            USD 350
          </Text>
          <Text style={styles.headerText}>TMA-2</Text>
          <Text style={styles.headerText}>HD WIRELESS</Text>
        </View>

        <View style={styles.headerTabs}>
          <Text style={styles.tabText}>Overview</Text>
          <Text style={styles.tabText}>Features</Text>
          <Text style={styles.tabText}>Specification</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{height: 391, width: '100%'}}
            contentContainerStyle={{
              alignItems: 'center', // Center vertically
              justifyContent: 'center', // Center horizontally
              paddingHorizontal: 16, // Add padding if needed
              overflow: 'hidden',
            }}>
            <View style={styles.frame}></View>
            {/* <View style={styles.frame}></View> */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsOverview;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  headerTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
    height: 33,
    // paddingHorizontal: 10,
    // overflow: 'hidden'
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    fontStyle: 'DM Sans',
  },
  frame: {
    width: 285,
    height: 391,
    backgroundColor:'#F6F6F6',
    borderRadius: 10,
  },
});
