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
      navigation.navigate('SignUp')
    }
    const handleToSignIn =( )=>{
      navigation.navigate('Home')
    }
  return (
    <View style={styles.container}>
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
          </View>
          <Text style={{color: '#fff', marginTop: 10, fontWeight: 'bold'}}>
            Forgot Password
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <Button
              title="Sign In"
              color={'#0ACF83'}
              containerStyle={styles.buttonBtn}
              onPress={() => handleToSignIn()}
            />
            <Text style={{fontSize: 15, color: '#fff'}}>
              Didn’t have any account?{' '}
              <TouchableOpacity onPress={() => handleToSigUp()}>
              <Text style={{color: '#0ACF83', textDecorationLine: 'underline'}} >
                Sign Up here
              </Text></TouchableOpacity>
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
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  screen1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    gap: 5,
  },

  buttonBtn: {
    backgroundColor: '#0ACF83',
    height: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 50,
    width: '90%',
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
  icons: {
    marginRight: 10,
    opacity: 0.6,
  },
});
