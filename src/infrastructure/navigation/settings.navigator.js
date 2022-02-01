import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { ProfileScreen } from "../../features/settings/screens/profile.screen";

import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerMode: "screen",
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="SettingsScreen"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="Favourites"
                component={FavouritesScreen} />
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="Profile"
                component={ProfileScreen} />
        </SettingsStack.Navigator>
    );
}