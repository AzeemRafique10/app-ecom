import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  DrawerLayoutAndroid,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import AudioLogo from '../../assets/logo/AudioLogo';
import MenuVariant from '../../assets/Icon/MenuVariant';
import {DATA} from '../../Data/Alldata';
import InputText from '../../components/InputText/InputText';
import Models from './Model/Models';
import Avator from '../../components/Avatar/Avator';
import {useNavigation} from '@react-navigation/native';
import X from '../../assets/Icon/X';
import ProfileSettings from '../../components/Profile/ProfileSettings';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {home, profile} = DATA;
  const drawer = useRef(null);

  const handleToSearch = () => navigation.navigate('Search');
  const handleToProfile = () => navigation.navigate('ProfileSet');

  const navigationView = () => (
    <View style={[styles.containerDrawer, styles.navigationContainer]}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => drawer.current.closeDrawer()}>
        <X width={30} height={30} marginRight={5} />
      </TouchableOpacity>
      <View style={styles.profileView}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileSet')}>
          <Image style={styles.photo} source={profile.image} />
        </TouchableOpacity>
        <View style={{width: 200}}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>
      </View>
      <ProfileSettings />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        {/* Section 1: Top Header */}
        <View style={styles.section1}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <MenuVariant />
          </TouchableOpacity>
          <View style={styles.headerLogo}>
            <AudioLogo />
            <Text style={styles.logoText}>{home.headers}</Text>
          </View>
          <TouchableOpacity onPress={handleToProfile}>
            <Avator />
          </TouchableOpacity>
        </View>

        {/* Section 2: Greeting Text */}
        <View style={styles.section2}>
          <Text style={styles.greetingText}>Hi, {home.username}</Text>
          <Text style={styles.mainText}>{home.title}</Text>
        </View>
        {/* Section 3: Search Bar */}
        <InputText onFocus={() => handleToSearch()} />
        <Models />
      </View>
    </DrawerLayoutAndroid>
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
  containerDrawer: {
    // flex: 1,
    backgroundColor: '#F8F9FC',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    marginLeft: 5,
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
  profileView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    width: '90%',
    gap: 10,
  },
  photo: {
    width: 55,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 40,
    marginLeft: 6,
    borderWidth: 1,
  },
  closeIcon: {
    width: '100%',
    flexDirection: 'row-reverse',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    // marginTop: 10,
  },
  email: {
    fontSize: 14,
    margin: 5,
  },
});
