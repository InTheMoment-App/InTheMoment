import React, { Component } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    StyleSheet, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { View } from 'components/Themed';
import Layout from 'constants/Layout';
import styles from './styles';

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * Layout.window.aspect_ratio;

type MapProps = unknown;

type MapState = {
  searchQuery: string,
  loading: boolean,
  loadingMap: boolean,
  updatedRegion: boolean,
  markerPosition: Record<string, unknown>,
  region: Record<string, unknown>
};

export default class Discover extends Component<MapProps, MapState> {
    constructor(props: MapProps) {
        super(props);
        this.state = {
            searchQuery: '',
            loading: true,
            loadingMap: false,
            updatedRegion: false,
            markerPosition: {
                latitude: 0,
                longitude: 0,
            },
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    async componentDidMount() {
        await this.getLocationAsync();
        this.setState({ loading: false });
    }

    componentDidUpdate() {
        if (this.state.updatedRegion && this.state.loading) {
            this.updateLoading();
        }
    }

    onRegionChange = (region: any) => {
        this.setState({ region });
        // this.mapView.animateToRegion(region, 200);
    }

    onSearchChange = (query: string) => {
        this.setState({ searchQuery: query });
    }

    getLocationAsync = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            // TODO: add proper error messages
            // this.setState({ errorMessage: 'Permissions not granted' });
            return;
        }
        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.LocationAccuracy.Balanced,
        });

        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };

        this.setState({
            region,
            updatedRegion: true,
            markerPosition: region,
        });
    };

    updateLoading() {
        this.setState({
            loadingMap: true,
            loading: false,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loadingMap
        && (
            <>
                <MapView
                    ref={(ref) => { this.mapView = ref; }}
                    style={StyleSheet.absoluteFillObject}
                    provider={PROVIDER_GOOGLE}
                    onRegionChange={this.onRegionChange}
                    initialRegion={this.state.region}
                >
                    <Marker tracksViewChanges={false} coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </Marker>
                </MapView>
                <View style={styles.searchbarContainer}>
                    <Searchbar
                        placeholder="Enter a location"
                        value={this.state.searchQuery}
                        onChangeText={this.onSearchChange}
                    />
                </View>
                <TouchableOpacity onPress={() => this.getLocationAsync()}>
                    <Feather
                        name="navigation"
                        size={24}
                        color="#007AFF"
                        style={styles.centerMapButton}
                    />
                </TouchableOpacity>
            </>
        )}
                {this.state.loading
          && (
              <View style={styles.loading}>
                  <ActivityIndicator size="large" />
              </View>
          )}
            </View>
        );
    }
}
