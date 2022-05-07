import React from 'react';
import 'react-native-gesture-handler'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {PlantDetails, Tabs} from "./src";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions ={{
                    headerShown: false
                }}
                initialRouteName = {"Home"}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="PlantDetail" component={PlantDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App; 