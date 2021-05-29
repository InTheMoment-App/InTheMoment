import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from 'screens/Home';
import LeaderboardScreen from 'screens/Leaderboard';
import SettingsScreen from 'screens/Settings';
import ProfileScreen from 'screens/Profile';
import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';
import {
    BottomTabParamList, HomeParamList, LeaderboardParamList, SettingsParamList, ProfileParamList,
} from 'types';

import i18n from 'translations/Translate';

const CameraPlaceholder = () => (
    <View style={{ flex: 1, backgroundColor: 'blue' }} />
);

const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: i18n.t('home'), headerTitleAlign: 'left' }}
            />
        </HomeStack.Navigator>
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

const LeaderboardStack = createStackNavigator<LeaderboardParamList>();
function LeaderboardNavigator() {
    return (
        <LeaderboardStack.Navigator>
            <LeaderboardStack.Screen
                name="LeaderboardScreen"
                component={LeaderboardScreen}
                options={{ headerTitle: i18n.t('leaderboard'), headerTitleAlign: 'left' }}
            />
        </LeaderboardStack.Navigator>
    );
}

const SettingsStack = createStackNavigator<SettingsParamList>();
function SettingsNavigator() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{ headerTitle: i18n.t('settings'), headerTitleAlign: 'left' }}
            />
        </SettingsStack.Navigator>
    );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
}

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <BottomTabs.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tint,
                showLabel: false,
            }}
        >
            <BottomTabs.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="Leaderboard"
                component={LeaderboardNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="podium" color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="CameraPlaceholder"
                component={CameraPlaceholder}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="add-circle" color={color} />,
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Camera');
                    },
                })}
            />
            <BottomTabs.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="person-circle" color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="settings-sharp" color={color} />,
                }}
            />
        </BottomTabs.Navigator>
    );
}
