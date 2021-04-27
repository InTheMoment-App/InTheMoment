import * as React from 'react';
import { StyleSheet } from 'react-native';

// TODO: actually use code, commented out so it passes linter since we have no
// real use for it currently
// import { useQuery, gql } from '@apollo/client';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default function ProfileScreen() {
//     const EXCHANGE_RATES = gql`
//     query {
//         book(bookId: 2) {
//           id
//           title
//           author
//         }
//       }
//   `;

    // const testQuery = () => {
    //     const { loading, error, data } = useQuery(EXCHANGE_RATES);
    //     if (error || loading) {
    //         return;
    //     }
    //     return data;
    // };

    // testQuery();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}
