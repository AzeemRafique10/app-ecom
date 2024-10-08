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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Audio</Text>
          <Text style={styles.headerTitle2}>
            It's modular and designed to last
          </Text>
        </View>
        {/* section 2 */}
        <View style={styles.inputContainer}>
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 40,
          }}>
          <Text style={{fontSize: 15, color: '#fff', lineHeight: 20}}>
            Didn’t have any account?{' '}
          </Text>
          <TouchableOpacity onPress={() => console.log('Sign In')}>
            <Text style={{color: '#0ACF83', textDecorationLine: 'underline'}}>
              Sign In here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthSignUp;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '100%',
  },
  header: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'DM-SANS-Regular',
    fontSize: 51,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerTitle2: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    shadowColor: '#fff',
  },
  inputContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#0ACF83',
    borderRadius: 10,
    margin: 10,
  },

  inputFields: {
    width: '100%',
    height: 50,
    fontSize: 16,
  },
  icons: {
    marginRight: 10,
    opacity: 0.6,
  },
  section3: {
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
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
