import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { useQuery, gql } from '@apollo/client';

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
    const EXCHANGE_RATES = gql`
    query {
        book(bookId: 2) {
          id
          title
          author
        }
      }
  `;

  let testQuery = () => {
      const { loading, error, data } = useQuery(EXCHANGE_RATES);
      console.log(error);
      console.log(data);
  }

  testQuery();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}
