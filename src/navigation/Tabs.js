import React from 'react';
import {View, Text, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {camera, COLOURS, cube, flash, heart, search} from "../constant";
import {Favorite, Search, Home, Camera, Box} from "../screens";

const Tab = createBottomTabNavigator()

const tabOptions = {
    showLabel: false,

    style: {
        height: "10%"
    }
}
const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLOURS.primary
            }}
        >
            <Image
                source={camera}
                resizeMode={'contain'}
                style={{
                    width: 23,
                    height: 23
                }}
            />
        </View>
    )
}

export const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions = {tabOptions}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLOURS.primary : COLOURS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={flash}
                                    resizeMode={'contain'}
                                    style={{
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Box":
                            return (
                                <Image
                                    source={cube}
                                    resizeMode={'contain'}
                                    style={{
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Camera":
                            return (
                               <CameraButton/>
                            )
                        case "Search":
                            return (
                                <Image
                                    source={search}
                                    resizeMode={'contain'}
                                    style={{
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Favorite":
                            return (
                                <Image
                                    source={heart}
                                    resizeMode={'contain'}
                                    style={{
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
            }
            })}

        >

            <Tab.Screen options={{headerShown:false}} name="Home" component={Home}/>
            <Tab.Screen options={{headerShown:false}} name="Box" component={Box}/>
            <Tab.Screen options={{headerShown:false}} name="Camera" component={Camera}/>
            <Tab.Screen options={{headerShown:false}} name="Search" component={Search}/>
            <Tab.Screen options={{headerShown:false}} name="Favorite" component={Favorite}/>
        </Tab.Navigator>
    )
}
