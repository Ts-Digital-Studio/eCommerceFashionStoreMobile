import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../pages/Home";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import UserAccount from "../pages/User-Account";
import Wishlist from "../pages/Wishlist";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarStyle:{

                }
            }}
        >
            <Tab.Screen
                name='Home-Tab'
                component={Home}
            />
            <Tab.Screen
                name='Search-Tab'
                component={Search}
            />
            <Tab.Screen
                name='Cart-Tab'
                component={Cart}
            />
            <Tab.Screen
                name='Wishlist-Tab'
                component={Wishlist}
            />
            <Tab.Screen
                name='Account-Tab'
                component={UserAccount}
            />
        </Tab.Navigator>
    );
}
