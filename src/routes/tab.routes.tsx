import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../pages/Home";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import UserAccount from "../pages/User-Account";
import Wishlist from "../pages/Wishlist";

import Octicons from '@expo/vector-icons/Octicons';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import theme from "../global/styles/theme";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarActiveBackgroundColor: theme.colors.secundary,
                tabBarActiveTintColor: theme.colors.secundary,
                tabBarInactiveTintColor: theme.colors.Light,
                tabBarStyle:{
                    height: 70,
                    backgroundColor: theme.colors.primary,
                    position: 'absolute',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name='Home-Tab'
                component={Home}
                options={{
                    tabBarIcon: (({size,color,focused})=> {
                        if(focused){
                           return <Foundation name="home" size={29} color={color}/>
                        }
                        return <Octicons name="home" size={25} color={color}/>
                    }
                    ),
                    tabBarHideOnKeyboard: true
                }}
            />
            <Tab.Screen
                name='Search-Tab'
                component={Search}
                options={{
                    tabBarIcon: (({size,color,focused})=> {
                        // if(focused){
                        //    return <Foundation name="home" size={30} color={color}/>
                        // }
                        return <Octicons name="search" size={size} color={color}/>
                    }
                    ),
                }}
            />
            <Tab.Screen
                name='Cart-Tab'
                component={Cart}
                options={{
                    tabBarIcon: (({size,color,focused})=> {
                        if(focused){
                           return <Ionicons name="cart" size={30} color={color}/>
                        }
                        return <Ionicons name="cart-outline" size={30} color={color}/>
                    }
                    ),
                }}
            />
            <Tab.Screen
                name='Wishlist-Tab'
                component={Wishlist}
                options={{
                    tabBarIcon: (({size,color,focused})=> {
                        if(focused){
                           return <MaterialIcons name="favorite" size={28}color={color}/>
                        }
                        return <MaterialIcons name="favorite-border" size={28}color={color}/>
                    }
                    ),
                }}
            />
            <Tab.Screen
                name='Account-Tab'
                component={UserAccount}
                options={{
                    tabBarIcon: (({size,color,focused})=> {
                        if(focused){
                           return <MaterialCommunityIcons name="account" size={30} color={color}/>
                        }
                        return <MaterialCommunityIcons name="account-outline" size={30} color={color}/>
                    }
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
