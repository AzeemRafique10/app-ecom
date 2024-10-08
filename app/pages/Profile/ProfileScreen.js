import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {DATA} from '../../Data/Alldata';
import ProfileTopBar from '../../components/StatusBar/ProfileTopBar';
import ProfileSettings from '../../components/Profile/ProfileSettings';

const ProfileScreen = () => {
  const {profile} = DATA;
  return (
    <View style={styles.container}>
      <View style={styles.widthContainer}>
        <View>
          <ProfileTopBar />
          <View style={styles.profileView}>
            <TouchableOpacity>
              <Image style={styles.photo} source={profile.image} />
            </TouchableOpacity>
            <View>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.email}>{profile.email}</Text>
            </View>
          </View>
        </View>
        <ProfileSettings />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  widthContainer: {
    flex: 1,
    width: '90%',
  },
  profileView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    gap: 10,
  },
  photo: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 40,
    marginLeft: 6,
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    marginTop: 10,
  },
});
