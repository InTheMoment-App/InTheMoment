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
