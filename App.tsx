import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client/react';

import { Provider as PaperProvider } from 'react-native-paper';
import { auth } from 'utilities/firebase';
import Login from 'screens/Login';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import client from './components/GraphQLService';

// TEMP

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [authInitializing, setAuthInitializing] = useState(false);
    const [user, setUser] = useState();

    function onAuthStateChanged(user : any) {
        setUser(user);
        if (authInitializing) setAuthInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (!isLoadingComplete || authInitializing) {
        return null;
    }

    // if (!user) {
        return (
            <Login/>
        );
    // }

    console.log(user.uid);

    return (
        <ApolloProvider client={client}>
            <PaperProvider>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </SafeAreaProvider>
            </PaperProvider>
        </ApolloProvider>
    );
}
