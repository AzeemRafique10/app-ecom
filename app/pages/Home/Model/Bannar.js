import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DATA} from '../../../Data/Alldata'; // Assuming DATA contains title and image URL.
import ArrowRight from '../../../assets/Icon/ArrowRight';

const Bannar = () => {
  const {title, URL} = DATA;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Left section with title and button */}
        <View style={styles.titleWithButton}>
          <Text style={styles.text}>{title}</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopText}>Shop Now </Text>
            <ArrowRight />
          </TouchableOpacity>
        </View>

        {/* Right section with the image */}
        <Image style={styles.image} source={URL} />
      </View>
    </View>
  );
};

export default Bannar;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    flexDirection: 'row',
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
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
