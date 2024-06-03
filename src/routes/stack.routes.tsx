import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../pages/Home";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator
            screenOptions={{

            }}
        >
            <Stack.Screen
                name="Home-Stack"
                component={Home}
            />
        </Stack.Navigator>
    );
}



