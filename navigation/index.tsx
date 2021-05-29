import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Login from 'screens/Login';
import Register from 'screens/Login/Register';
import ForgotPassword from 'screens/Login/ForgotPassword';

import NotFoundScreen from 'screens/NotFound';
import {
    LoggedOutParamList,
    RootStackParamList 
} from 'types';
import CameraScreen from 'screens/Camera';
import PostPreviewScreen from 'screens/PostPreview';
import FullScreenImageScreen from 'screens/FullScreenImage';
import uploadImage from 'screens/PostPreview/data/upload';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const LoggedOutStack = createStackNavigator<LoggedOutParamList>();

function LoggedOutNavigator() {
    return (
        <LoggedOutStack.Navigator
            headerMode="none"
            mode="card"
        >
            <LoggedOutStack.Screen
                name="Login"
                component={Login}
            />
            <LoggedOutStack.Screen
                name="Register"
                component={Register}
            />
            <LoggedOutStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
        </LoggedOutStack.Navigator>
    );
}

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
            <RootStack.Screen
                name="PostPreview"
                component={PostPreviewScreen}
            />
            <RootStack.Screen
                name="Upload"
                component={uploadImage}
            />
            <RootStack.Screen
                name="FullScreenImage"
                component={FullScreenImageScreen}
            />
            <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </RootStack.Navigator>
    );
}

export function LoggedOutNav({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <LoggedOutNavigator />
        </NavigationContainer>
    );
}

export function LoggedInNav({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

