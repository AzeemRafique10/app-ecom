import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Image10 from '../../assets/images/Image10.jpg';
import {Button, Text} from '@rneui/themed';
import Mail from '../../assets/Icon/Mail';
import Lock from '../../assets/Icon/Lock';

const AuthSignIn = ({navigation}) => {
  const handleToSigUp = () => {
    navigation.navigate('SignUp');
  };
  const handleToSignIn = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Image10}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.widthContainer}>
          <View style={styles.screen}>
            <Text style={styles.headerTitle}>Audio</Text>
            <Text style={styles.headerTitle2}>
              It's modular and designed to last
            </Text>
          </View>
          <View style={styles.screen}>
            <View style={styles.screen1}>
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
              <View style={styles.passwordReset}>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
              </View>
            </View>

            <View style={styles.signInMethod}>
              <View style={styles.buttonBtn}>
                <Button
                  title="Sign In"
                  color={'#0ACF83'}
                  onPress={() => handleToSignIn()}
                />
              </View>

              <Text style={{fontSize: 15, color: '#fff'}}>
                Didn’t have any account?{' '}
                <TouchableOpacity onPress={() => handleToSigUp()}>
                  <Text
                    style={{
                      color: '#0ACF83',
                      textDecorationLine: 'underline',
                    }}>
                    Sign Up here
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widthContainer: {
    flex: 1,
    width: '90%',
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
  screen: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  screen1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInMethod: {
    width: '100%',
    height: 94,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonBtn: {
    backgroundColor: '#0ACF83',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    width: '95%',
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
  inputFields: {
    flex: 1,
    height: 50, // Adjust the height to fit the icon properly
    fontSize: 16,
  },
  passwordReset: {
    width: '100%',
    height: 30,
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icons: {
    marginRight: 10,
    opacity: 0.6,
  },
});
