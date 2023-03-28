import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import SignInScreen from "./Screens/SignInScreen/SignInScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import CheckoutScreen from "./Screens/CheckoutScreen/CheckoutScreen"
import ThankYouScreen from "./Screens/ThankYouScreen/ThankYouScreen";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinBtnStyle:{
    backgroundColor: 'green'
    

  }
});
  /***** 
      <Text>University of Hertfordshire transportation</Text>
      <Pressable style={styles.signinBtnStyle}> 
        <Text>sign in</Text>
      </Pressable>
      <StatusBar style="auto" />
      */
