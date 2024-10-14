import React from "react";
import Splash from "../pages/Splash";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";

type RoutesStack = {
    Home: undefined,
    Search: undefined,
    Cart: undefined,
    UserAccount: undefined,
    Wishlist: undefined,
    Category: undefined,
    SingleProduct: undefined,
    Splash: undefined
    homeTabs: undefined
}

export type NavigationRoutesStack = NativeStackNavigationProp<RoutesStack>

const {Navigator, Screen} = createNativeStackNavigator<RoutesStack>();

export default function StackRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Splash"
                component={Splash}
            />
            <Screen
                name="homeTabs"
                component={TabRoutes}
            />
        </Navigator>
    );
}



