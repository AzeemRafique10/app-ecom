import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Clock from '../../assets/Icon/Clock';
import X from '../../assets/Icon/X';
import {DATA} from '../../Data/Alldata';
import MoreVertical from '../../assets/Icon/MoreVertical';

const LastSearchItem = () => {
  const {popularProducts} = DATA;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lastest search</Text>
      <View style={styles.recent}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Clock />
          <Text style={{fontSize: 16, color: '#000'}}>TMA2 Wireless</Text>
        </View>
        <X />
      </View>
      <View style={styles.recent}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Clock />
          <Text style={{fontSize: 16, color: '#000'}}>Cable</Text>
        </View>
        <X />
      </View>
      {/* Section Popular Product */}
      <View style={styles.popularProduct}>
        <Text style={styles.text}>Popular product</Text>

        {popularProducts.map((item, index) => (
          <View key={index} style={styles.reviewCard}>
            <View style={styles.image}>
              <Image style={{width: 65, height: 65}} source={item.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.detailname}>{item.name}</Text>
              <Text style={styles.detailsprice}>{item.price}</Text>
              <View style={styles.reviewbottom}>
                <Text style={styles.detailsreview}>
                  ⭐ {item.rating} {item.reviews} Reviews
                </Text>
                <MoreVertical />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LastSearchItem;

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '90%',
  },
  popularProduct: {
    width: '100%',
    height: 326,
    marginTop: 20,
  },
  text: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  reviewCard: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  details: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },

  image: {
    width: 80, 
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
  },

  detailname: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },

  detailsprice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },

  detailsreview: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
    color: '#000',
  },

  reviewbottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
