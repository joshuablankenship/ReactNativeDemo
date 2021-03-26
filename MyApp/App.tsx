import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//@ts-ignore
import {createStackNavigator} from '@react-navigation/stack';
import Login from './containers/Login';
import Main from './containers/Main';
import Description from './containers/Description';

export type RootStackParamList = {
  Login: undefined;
  Description: {breed: string; catInfo: any} | undefined;
  Main: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Cat Facts', headerTintColor: 'black'}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Select a Breed', headerTintColor: 'black'}}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{title: 'Cat Description', headerTintColor: 'black'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
