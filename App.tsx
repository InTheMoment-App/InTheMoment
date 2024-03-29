import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// eslint doesn't like that there is no package referencing this
// however this is how apollo expects it
/* eslint-disable import/no-extraneous-dependencies */
import { ApolloProvider } from '@apollo/client/react';
/* eslint-enable import/no-extraneous-dependencies */

import { Provider as PaperProvider } from 'react-native-paper';
import { auth } from 'utilities/firebase';
import UserContext from 'utilities/userContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { LoggedOutNav, LoggedInNav } from './navigation';

import client from './components/GraphQLService';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [authInitializing, setAuthInitializing] = useState(false);
    const [user, setUser] = useState( {} );

    function onAuthStateChanged(userObject : any) {
        setUser(userObject);
        if (authInitializing) setAuthInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (!isLoadingComplete || authInitializing) {
        return null;
    }

    return (
        <PaperProvider>
            <SafeAreaProvider>
                { user == null ? (
                    <LoggedOutNav colorScheme={colorScheme} />
                ): (
                    <UserContext.Provider value={user}>
                        <ApolloProvider client={client}>
                            <LoggedInNav colorScheme={colorScheme} />
                            <StatusBar />
                        </ApolloProvider>
                    </UserContext.Provider>
                )}
            </SafeAreaProvider>
        </PaperProvider>
    );
}
