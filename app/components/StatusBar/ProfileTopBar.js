import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {DATA} from '../../Data/Alldata';
import ChevronLeft from '../../assets/Icon/ChevronLeft';
import LogOut from '../../assets/Icon/LogOut';
import {useNavigation} from '@react-navigation/native';

const ProfileTopBar = () => {
  const navigation = useNavigation();
  const {profile} = DATA;
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <ChevronLeft />
      </TouchableOpacity>
      <Text style={styles.text}>{profile.title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <LogOut />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTopBar;

const styles = StyleSheet.create({
  header: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
