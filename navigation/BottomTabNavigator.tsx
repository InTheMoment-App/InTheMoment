import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import CameraScreen from '../screens/CameraScreen';
import {
    BottomTabParamList, HomeParamList, LeaderboardParamList, ProfileParamList, DiscoverParamList,
} from '../types';

import i18n from '../translations/Translate';

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Home', headerTitleAlign: 'left' }}
            />
        </HomeStack.Navigator>
    );
}

const DiscoverStack = createStackNavigator<DiscoverParamList>();

function DiscoverNavigator() {
    return (
        <DiscoverStack.Navigator>
            <DiscoverStack.Screen
                name="DiscoverScreen"
                component={DiscoverScreen}
                options={{ headerTitle: i18n.t('discover'), headerTitleAlign: 'left' }}
            />
        </DiscoverStack.Navigator>
    );
}

 const CameraStack = createStackNavigator<DiscoverParamList>();

function CameraNavigatorPlaceholder() {
    return (
        <CameraStack.Navigator mode="modal">
            <CameraStack.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{ headerShown: false }}
            />
        </CameraStack.Navigator>
    );
    // return ( null );
}

const LeaderboardStack = createStackNavigator<LeaderboardParamList>();

function LeaderboardNavigator() {
    return (
        <LeaderboardStack.Navigator>
            <LeaderboardStack.Screen
                name="LeaderboardScreen"
                component={LeaderboardScreen}
                options={{ headerTitle: 'Leaderboard', headerTitleAlign: 'left' }}
            />
        </LeaderboardStack.Navigator>
    );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: i18n.t('profile'), headerTitleAlign: 'left' }}
            />
        </ProfileStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tint,
                showLabel: false,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Discover"
                component={DiscoverNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Camera"
                component={CameraNavigatorPlaceholder}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="add-circle" color={color} />,
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate( CameraScreen );
                    }
                })}
            />
            <BottomTab.Screen
                name="Leaderboard"
                component={LeaderboardNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="podium" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="person-circle" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}
