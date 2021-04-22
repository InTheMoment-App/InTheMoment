import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomesScreen from '../screens/HomesScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import {
    BottomTabParamList, HomesParamList, ChatsParamList, ProfileParamList, DiscoverParamList,
} from '../types';

import i18n from '../translations/Translate';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomesStack = createStackNavigator<HomesParamList>();

function HomesNavigator() {
    return (
        <HomesStack.Navigator>
            <HomesStack.Screen
                name="HomesScreen"
                component={HomesScreen}
                options={{ headerTitle: 'Find a home', headerTitleAlign: 'left' }}
            />
        </HomesStack.Navigator>
    );
}

const DiscoverStack = createStackNavigator<DiscoverParamList>();

function DiscoverNavigator() {
    return (
        <DiscoverStack.Navigator
            screenOptions={{ gestureEnabled: true, ...TransitionPresets.SlideFromRightIOS}}
        >
            <DiscoverStack.Screen
                name="DiscoverScreen"
                component={DiscoverScreen}
                options={{ headerTitle: i18n.t('discover'), headerTitleAlign: 'left' }}
            />
        </DiscoverStack.Navigator>
    );
}

const PostStack = createStackNavigator<DiscoverParamList>();

function PostNavigator() {
    return (
        <PostStack.Navigator     screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
            <PostStack.Screen
                name="DiscoverScreen"
                component={DiscoverScreen}
                options={{ headerTitle: i18n.t('discover'), headerTitleAlign: 'left' }}
            />
        </PostStack.Navigator>
    );
}

const ChatsStack = createStackNavigator<ChatsParamList>();

function ChatsNavigator() {
    return (
        <ChatsStack.Navigator>
            <ChatsStack.Screen
                name="ChatsScreen"
                component={ChatsScreen}
                options={{ headerTitle: 'Chats', headerTitleAlign: 'left' }}
            />
        </ChatsStack.Navigator>
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

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Homes"
            // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
            shifting={false}
            sceneAnimationEnabled={true}
        >
            <BottomTab.Screen
                name="Homes"
                component={HomesNavigator}
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
                name="Post"
                component={PostNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="add-circle" color={color} />,
                }}
            />            
            <BottomTab.Screen
                name="Chats"
                component={ChatsNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="chatbubbles" color={color} />,
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
