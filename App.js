import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import AllUsers from './src/screens/users';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Sign up' component={Signup} />
        <Stack.Screen name='Home' component={Home} options={{headerBackVisible:false}} />
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='Users' component={AllUsers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}