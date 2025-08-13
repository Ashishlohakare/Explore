import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Intro2 from '../screens/Intro2';
import Intro3 from '../screens/Intro3';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Intro2" component={Intro2} options={{headerShown: false}}/>
      <Stack.Screen name="Intro3" component={Intro3} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
