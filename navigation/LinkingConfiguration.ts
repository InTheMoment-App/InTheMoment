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
                    Profile: {
                        screens: {
                            ProfileScreen: '',
                        },
                    },
                    Camera: {
                        screens: {
                            CameraScreen: '',
                        },
                    },
                    FullScreenImage: {
                        screens: {
                            FullScreenImageScreen: '',
                        }
                    },
                    Leaderboard: {
                        screens: {
                            LeaderboardScreen: '',
                        },
                    },
                    PostPreview: {
                        screens: {
                            PostPreviewScreen: '',
                        }
                    },
                    Settings: {
                        screens: {
                            SettingsScreen: '',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
