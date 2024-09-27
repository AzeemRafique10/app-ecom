import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {DATA} from '../../../Data/Alldata';
import ArrowRight from '../../../assets/Icon/ArrowRight';
import {useNavigation} from '@react-navigation/native';

const Bannar = () => {
  const navigation = useNavigation();
  const {bannerCard} = DATA;

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Left section with title and button */}
        <View style={styles.titleWithButton}>
          <Text style={styles.text}>{item.title}</Text>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => navigation.navigate('Explore')}>
            <Text style={styles.shopText}>Shop Now </Text>
            <ArrowRight />
          </TouchableOpacity>
        </View>

        {/* Right section with the image */}
        <Image style={styles.image} source={item.URL} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={bannerCard}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: 10}}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Bannar;

const styles = StyleSheet.create({
  container: {
    height: 178,
    width: 326,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    width: 326,
    height: 178,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  titleWithButton: {
    width: 140,
    height: 150,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
  },
  shopButton: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    textAlign: 'center',
  },
  shopText: {
    color: '#0ACF83',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
