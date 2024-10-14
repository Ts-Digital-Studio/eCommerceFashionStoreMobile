import React from "react";
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../pages/Home";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import UserAccount from "../pages/User-Account";
import Wishlist from "../pages/Wishlist";
import Category from "../pages/Category";
import SingleProduct from "../pages/Single-Product";

import Octicons from '@expo/vector-icons/Octicons';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import theme from "../global/styles/theme";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

type RoutesTabs = {
    Home: undefined,
    Search: undefined,
    Cart: undefined,
    UserAccount: undefined,
    Wishlist: undefined,
    Category: undefined,
    SingleProduct: undefined
}

export type NavigationRoutesTabs = BottomTabNavigationProp<RoutesTabs>

const Tab = createBottomTabNavigator<RoutesTabs>();

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
                name='Home'
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
                name='Search'
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
                name='Cart'
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
                name='Wishlist'
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
                name='UserAccount'
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
            <Tab.Screen 
                name='Category'
                component={Category}
                options={{
                    tabBarButton: () => null
                }}
            />
            <Tab.Screen
                name='SingleProduct'
                component={SingleProduct}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Tab.Navigator>
    );
}
