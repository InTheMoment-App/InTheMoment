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
                    Chats: {
                        screens: {
                            ChatsScreen: 'three',
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
