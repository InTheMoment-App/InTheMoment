import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Homes: {
                        screens: {
                            HomesScreen: 'one',
                        },
                    },
                    Chats: {
                        screens: {
                            ChatsScreen: 'two',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
