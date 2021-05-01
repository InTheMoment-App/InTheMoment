import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: '',
                        },
                    },
                    BottomTab: {
                        screens: {
                            BottomTabNavigator: '',
                        },
                    },
                    Discover: {
                        screens: {
                            DiscoverScreen: '',
                        },
                    },
                    Camera: {
                        screens: {
                            CameraScreen: '',
                        },
                    },
                    Leaderboard: {
                        screens: {
                            LeaderboardScreen: '',
                        },
                    },
                    Profile: {
                        screens: {
                            ProfileScreen: '',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
