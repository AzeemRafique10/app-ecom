import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import MoreVertical from '../../assets/Icon/MoreVertical';
import {DATA} from '../../Data/Alldata';

const ExploreModel = () => {
  const {exploreCards} = DATA;

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/Headphone.png')}
        style={styles.image}
        resizeMethod="cover"
      />
      <View style={{width: '90%'}}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.textPrice}>USD {item.price}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={{fontSize: 12}}>⭐ {item.rating}</Text>
        <Text style={{fontSize: 12}}>{item.reviews} Reviews</Text>
        <MoreVertical width={13} height={13} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exploreCards}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Set the number of columns for the grid
        contentContainerStyle={styles.fullcard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F4',
    width: '100%',
    marginTop: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    // alignItems: 'center',
  },
  fullcard: {
    width: '100%',
    margin: 10, // Full width for grid alignment
    // alignItems: 'center',
    // paddingBottom: 50, // Space at the bottom
  },
  card: {
    width: '44%', // Adjust width for grid layout
    height: 243,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10, // Space between grid items
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },
  cardFooter: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  textPrice: {
    color: '#000',
    fontWeight: 'bold',
  },
});
