import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Avator = () => {
  const imageUrl =
    'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/avatar/avatar-10.png';

  return (
    <View style={styles.container}>
      {/* Displaying the image */}
      <Image style={styles.images} source={{uri: imageUrl}} />
    </View>
  );
};

export default Avator;

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 30,
    overflow: 'hidden', // Ensures the image doesn't overflow the container's border radius
  },
  images: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
