import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator 
            screenOptions={{

            }}
        >
            <Tab.Screen
                name='Home-Tab'
                component={Home}
            />
        </Tab.Navigator>
    );
}
