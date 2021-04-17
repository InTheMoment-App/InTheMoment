import React, { Component, useState, useEffect } from 'react';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location'
import Constants from 'expo-constants'

import { Text, View } from '../components/Themed';

export default class HomeScreen extends Component {
  // const [errorMsg, setErrorMsg] = useState<any | null>(null);
  // const [region, setRegion] = useState<any | null>(null);
  // const [location, setLocation] = useState<any | null>(null);

  state = {
      data: [],
      loading: true,
positionState: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    },
    }
    
    componentDidMount() {

        await this._handleMapRegionChange();

        
        this.setState({ data, loading: false });
    }

componentDidUpdate(){
  if (this.state.positionState.latitude!=='0'){
  this.state.loadingMap = true; 
  this.state.loading = false;
  }  
}
  _handleMapRegionChange = (location: any) => {
        if ( typeof(location) === 'undefined') {
          setRegion({
            latitude: 43.6690, 
            longitude: -79.2902,
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421
          });
          return;
        }

        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
       };

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        // setErrorMsg( 'Oops, this will not work on Snack in an Android emulator. Try it on your device!' );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      _handleMapRegionChange(location);
    })();
  }, []);

  render() {
    // return (
    //   <View style={styles.container}>
    //     <MapView 
    //       style={StyleSheet.absoluteFillObject}
    //       provider={MapView.PROVIDER_GOOGLE}
    //       region={region}
    //       onRegionChange={_handleMapRegionChange}>
    //     </MapView>
    //   </View>
    // );
  }
}

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
