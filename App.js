// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import RNLockTask from 'react-native-lock-task';

const Stack = createStackNavigator();

function App() {
  RNLockTask.startLockTask();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'ARCHANGEL MICHAEL CHURCH BOOKSTORE',
          cardStyle: {backgroundColor: '#FFFFFF'},
          headerTintColor: '#0F5891',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerStyle: {height: 105},
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            letterSpacing: 3,
            fontSize: 24,
            borderBottomColor: '#EBBE41',
            borderBottomWidth: 3,
          },
        }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
