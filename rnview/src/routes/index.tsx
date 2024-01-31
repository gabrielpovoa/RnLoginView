import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import App from '../../App';
import Home from '../Screen/home';
import Details from '../Screen/details';
import HomeScreen from '../Screen/homeScreen';

const Stack = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
        interface RootParamList {
         Home: undefined,
         HomeScreen:undefined,
         Details:{
            id:number
         }   
        }
    }
}

export const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Details' component={Details}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
