import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AudioLogo from '../../assets/logo/AudioLogo';
import Avator from '../../assets/avator/Avator';
import MenuVariant from '../../assets/Icon/MenuVariant';
import {Button, Text} from '@rneui/themed';
import Search from '../../assets/Icon/Search';
import Models from './Model/Models';

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      {/* Section 1: Top Header */}
      <View style={styles.section1}>
        <View>
          <MenuVariant />
        </View>
        <View style={styles.headerLogo}>
          <AudioLogo />
          <Text style={styles.logoText}>Audio</Text>
        </View>
        <View>
          <Avator />
        </View>
      </View>

      {/* Section 2: Greeting Text */}
      <View style={styles.section2}>
        <Text style={styles.greetingText}>Hi, Andrea</Text>
        <Text style={styles.mainText}>What are you looking for today?</Text>
      </View>
      {/* Section 3: Search Bar */}
      <View style={styles.searchBar}>
        <Search />
        <TextInput style={styles.searchInput} placeholder="Search headphone" />
      </View>
      {/* Section 4: Categories */}
      <View style={styles.model}>
        <Models/>
      </View>
      {/* Section 5: Banners */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  section1: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerLogo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section2: {
    width: '90%',
    marginTop: 20,
    alignItems: 'flex-start',
  },
  greetingText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    width: '80%',
  },
  // searchBar
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 45,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 1,
    margin: 10,
  },
  searchInput: {
    paddingHorizontal: 10,
    opacity: 0.7,
  },
  // model
  model: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    height: '100%',
    width: '100%',
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // bandage
  bandage: {
    backgroundColor: '#0ACF83',
    width: 100,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 30,
  },

  
});
