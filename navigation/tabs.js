import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
}from 'react-native';

import {createBottomTabNavigator, ButtomTabBar} from '@react-navigation/bottom-tabs';

import {home} from '../appScreens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
         headerShown: false,
         style:{
            borderTopWidth: 0,
            backgroundColor: "transparent",
            elevation: 0
         }
       }}
          /* tabBarOptions={{
                shownLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
           }} */
        >
            <Tab.Screen
                name="Home"
                component={home}
                options={{
                   tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode='contain'
                            style={{
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                         />
                    ),
                 }}
            />
            <Tab.Screen
                name="Search"
                component={home}
                options={{
                   tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                         />
                    ),
                 }}
            />
            <Tab.Screen
                name="Like"
                component={home}
                options={{
                   tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.like}
                            resizeMode='contain'
                            style={{
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                         />
                    ),
                 }}
            />
            <Tab.Screen
                name="User"
                component={home}
                options={{
                   tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                         />
                    ), 
                 }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

