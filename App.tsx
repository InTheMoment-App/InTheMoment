import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client/react';

import { Provider as PaperProvider } from 'react-native-paper';
import { auth } from 'utilities/firebase';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { LoggedOutNav, LoggedInNav } from './navigation';

import client from './components/GraphQLService';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [authInitializing, setAuthInitializing] = useState(false);
    const [user, setUser] = useState();

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
                    <ApolloProvider client={client}>
                        <LoggedInNav colorScheme={colorScheme} />
                        <StatusBar />
                    </ApolloProvider>
                )}
            </SafeAreaProvider>
        </PaperProvider>
    );
}
