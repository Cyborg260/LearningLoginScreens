//All following libraries packages are installed......

import React, { useState } from "react";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, } from "react-native";
import SigninScreen from "./ios/components/Sign in";
import SignupScreen from "./ios/components/Sign up";
import ForgotpassScreen from "./ios/components/Forgot password";


const Stack = createNativeStackNavigator();
//Main function which contains Navigation props....
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin" >
        <Stack.Screen name="Sign in" component={SigninScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign up" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot password" component={ForgotpassScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

