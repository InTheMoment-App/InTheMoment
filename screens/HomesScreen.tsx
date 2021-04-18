import React, { Component } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    StyleSheet, Dimensions, ActivityIndicator, TextInput, TouchableOpacity,
} from 'react-native';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import { View } from '../components/Themed';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF',
    },
    searchbar: {
        borderRadius: 10,
        margin: 0,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    centerMapButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 8,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: -300,
        right: 15,
    },
});

type MapProps = {};

type MapState = {
  loading: boolean,
  loadingMap: boolean,
  updatedRegion: boolean,
  markerPosition: object,
  region: object
};

export default class HomeScreen extends Component<MapProps, MapState> {
    constructor(props: MapProps) {
        super(props);
        this.state = {
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
                <View style={{ position: 'absolute', top: 10, width: '100%' }}>
                    <TextInput
                        style={styles.searchbar}
                        placeholder="Enter a location"
                        placeholderTextColor="#666"
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
