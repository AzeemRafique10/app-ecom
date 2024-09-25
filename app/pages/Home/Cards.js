import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {DATA} from '../../Data/Alldata';

const Cards = () => {
  const {cards} = DATA;

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image source={item.image} />
      </View>
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text2}>
          {item.price} {item.dollor}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cards}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: 10}}
    />
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    height: 235,
    width: 170,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  image: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
  text2: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
  },
});
