import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../modules/auth/Login';
import OTPVerification from '../modules/auth/OTPVerification';
import HomeScreen from '../Screen/HomeScreen';
import CreateWork from '../Screen/CreateWork';
import InitialInvestigation from '../Screen/InitialInvestigation';
import MechanicInvestigation from '../Screen/MechanicInvestigation';
import Submission from '../Screen/Submission';
import CustomerResponse from '../Screen/CustomerResponse';
import InventoryInvoice from '../Screen/inventoryInvoice';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateWork" component={CreateWork} />
      <Stack.Screen name="InitialInvestigation" component={InitialInvestigation} />
      <Stack.Screen name="MechanicInvestigation" component={MechanicInvestigation} />
      <Stack.Screen name="Submission" component={Submission} />
      <Stack.Screen name="CustomerResponse" component={CustomerResponse} />
      <Stack.Screen name="InventoryInvoice" component={InventoryInvoice} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
