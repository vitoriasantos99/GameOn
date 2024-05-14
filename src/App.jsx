import React from "react";
import {View,SafeAreaView } from "react-native"
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createNativeStackNavigator()

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        headerShown: false
                        }}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerTitle:"",
                    headerStyle:{backgroundColor:"#FFF"},
                    headerTransparent:100
                        }}
                    />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{
                    headerTitle:"",
                    headerStyle:{backgroundColor:"#FFF"},
                    headerTransparent:100
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}