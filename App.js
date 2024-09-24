import {StyleSheet} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthSignIn from './app/pages/AuthSignIn/AuthSignIn';
import AuthSignUp from './app/pages/AuthSignUp/AuthSignUp';
import HomeScreen from './app/pages/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={AuthSignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={AuthSignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={HomeScreen} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
