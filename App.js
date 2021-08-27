
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import {home, restaurant, delivery } from './appScreens';

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
             screenOptions={{
                headerShown: false
              }}
            initialRouteName={"Home"}
        >
            <Stack.Screen name="home" component={Tabs}/>
            <Stack.Screen name="Restaurant" component={restaurant}/>
            <Stack.Screen name="OrderDelivery" component={delivery}/>

            
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
