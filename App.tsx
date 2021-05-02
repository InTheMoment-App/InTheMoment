import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ApolloProvider } from '@apollo/client/react';
import { Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import client from './components/GraphQLService';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    }
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
