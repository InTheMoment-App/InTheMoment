import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import CameraScreen from '../screens/CameraScreen';
import LinkingConfiguration from './LinkingConfiguration';

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <RootStack.Navigator
            headerMode="none"
            screenOptions={{ animationEnabled: false }}
            mode="modal"
        >
            <RootStack.Screen
                name="BottomTab"
                component={BottomTabNavigator}
            />
            <RootStack.Screen
                name="Camera"
                component={CameraScreen}
                options={{ animationEnabled: true }}
            />
            <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </RootStack.Navigator>
    );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}
