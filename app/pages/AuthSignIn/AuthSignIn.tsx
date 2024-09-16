import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Image10 from '../../assets/images/Image10.jpg';

const AuthSignIn = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Image10}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.screen}>
          <Text style={styles.headerTitle}>Audio</Text>
          <Text style={{fontSize: 14, color: '#fff'}}>
            It's modular and designed to last
          </Text>
        </View>

        <View style={styles.screen}>
          <View style={styles.screen1}>
            <TextInput style={styles.inputField} placeholder="Email" />
            <TextInput style={styles.inputField} placeholder="Password" />
          </View>
          <Text style={{color: '#fff', marginTop: 10}}>Forgot Password</Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.bttn}
              onPress={() => console.log('Button Press!')}>
              <View style={styles.bttnContent}>
                <Text style={styles.bttnText}>Sign In</Text>
              </View>
            </TouchableOpacity>

            <Text style={{fontSize: 15, color: '#fff'}}>
              Didn’t have any account?
              <Text style={{color: '#0ACF83', textDecorationLine: 'underline'}}>
                Sign Up here
              </Text>
            </Text>
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
  headerTitle: {
    fontFamily: 'DM-SANS-Regular',
    fontSize: 51,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  screen1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
  inputField: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bttn: {
    backgroundColor: '#0ACF83',
    width: '90%',
    height: '20%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0ACF83',
  },
  bttnContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bttnText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
