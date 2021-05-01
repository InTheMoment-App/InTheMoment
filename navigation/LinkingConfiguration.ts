import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'one',
                        },
                    },
                    Discover: {
                        screens: {
                            DiscoverScreen: 'two',
                        },
                    },
                    Leaderboard: {
                        screens: {
                            LeaderboardScreen: 'three',
                        },
                    },
                    Profile: {
                        screens: {
                            ProfileScreen: 'four',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
