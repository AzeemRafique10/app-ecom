import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DATA} from '../../Data/Alldata';
import { useNavigation } from '@react-navigation/native';

const Cards = () => {
  const navigation = useNavigation();
  const {cards} = DATA;

  const handleToProductDetails = () => {
    navigation.navigate('ProductDetails');
  };

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => handleToProductDetails()}>
          <Image source={item.image} />
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text2}>
            {item.price} {item.dollor}
          </Text>
        </View>
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
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: 'center',
  },
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
