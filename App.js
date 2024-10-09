import {StyleSheet} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthSignIn from './app/pages/AuthSignIn/AuthSignIn';
import AuthSignUp from './app/pages/AuthSignUp/AuthSignUp';
import HomeScreen from './app/pages/Home/HomeScreen';
import SearchScreen from './app/pages/Search/SearchScreen';
import ExploreProducts from './app/pages/ExploreProducts/ExploreProducts';
import ProfileScreen from './app/pages/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={AuthSignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={AuthSignUp} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        <Stack.Screen name="Explore" component={ExploreProducts} options={{headerShown:false}} />
        <Stack.Screen name="ProfileSet" component={ProfileScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
