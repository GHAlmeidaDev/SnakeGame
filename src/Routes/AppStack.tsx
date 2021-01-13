import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homePage from '../homePage';
import index from '../index';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={homePage} />
        <Stack.Screen name="Game" component={index} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;