
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {main, restaurant, delivery, home } from './appScreens';

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            initialRouteName={home}
        >
            <Stack.Screen name='home' component={home}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
