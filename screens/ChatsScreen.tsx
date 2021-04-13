import * as React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>{item.key}</Text>
            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
