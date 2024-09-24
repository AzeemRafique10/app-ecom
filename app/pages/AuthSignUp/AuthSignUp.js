import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import Image10 from '../../assets/images/Image10.jpg';
import Mail from '../../assets/Icon/Mail';
import Lock from '../../assets/Icon/Lock';
import Apple from '../../assets/social/Apple';
import Facebook from '../../assets/social/Facebook';
import Google from '../../assets/social/Google';

const AuthSignUp = () => {
  return (
    <ImageBackground
      source={Image10}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.screen}>
        <Text style={styles.headerTitle}>Audio</Text>
        <Text
          style={{
            fontSize: 14,
            color: '#fff',
            fontWeight: 'bold',
            shadowColor: '#fff',
          }}>
          It's modular and designed to last
        </Text>
      </View>
      {/* section 2 */}
      <View style={styles.screen}>
        <View style={styles.inputContainers}>
          <Mail width={24} height={24} style={styles.icons} />
          <TextInput
            style={styles.inputFields}
            placeholder="Email"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainers}>
          <Lock width={24} height={24} style={styles.icons} />
          <TextInput
            style={styles.inputFields}
            placeholder="Pasword"
            placeholderTextColor="#888"
          />
        </View>
        {/* SignUp button */}
        <View style={styles.buttonContainers}>
          <Button
            title="Sign Up"
            color={'#0ACF83'}
            containerStyle={styles.buttonBtn}
            onPress={() => console.log('Button Press!')}
          />
        </View>
      </View>
      {/* SignUp with Social Media Accounts */}
      <View style={styles.section3}>
        <TouchableOpacity style={styles.socialBox}>
          <Apple />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBox}>
          <Facebook />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBox}>
          <Google />
        </TouchableOpacity>
      </View>
      {/* Section Text */}
      <View style={{flex: 0.5, flexDirection: 'row', }}>
        <Text style={{fontSize: 15, color: '#fff', lineHeight: 20}}>
          Didn’t have any account?{' '}
          <TouchableOpacity onPress={() => console.log('Sign In')}>
            <Text style={{color: '#0ACF83', textDecorationLine: 'underline'}}>
              Sign In here
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default AuthSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'DM-SANS-Regular',
    fontSize: 51,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
  buttonContainers: {
    height: 50,
    width: '96%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0ACF83',
    backgroundColor: '#0ACF83',
    borderRadius: 10,
    margin: 10,
  },

  inputFields: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  icons: {
    marginRight: 10,
    opacity: 0.6,
  },
  section3: {
    flex: 0.5,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  socialBox: {
    backgroundColor: '#fff',
    height: 55,
    width: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
