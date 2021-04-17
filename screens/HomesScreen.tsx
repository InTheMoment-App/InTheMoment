import React, { Component, useState, useEffect, useRef} from 'react';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { Platform, StyleSheet, Dimensions, ActivityIndicator, TextInput } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { Text, View } from '../components/Themed';

const { width, height } = Dimensions.get("window");

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeScreen extends Component {
  // const [errorMsg, setErrorMsg] = useState<any | null>(null);
  // const [region, setRegion] = useState<any | null>(null);
  // const [location, setLocation] = useState<any | null>(null);

	state = {
		data: [],
		errorMessage: null,
		loading: true,
		loadingMap: false,
		positionState: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0,
			longitudeDelta: 0
		},
		markerPosition: {
		  latitude: 0,
		  longitude: 0
		},
		region: {
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
		},
	};
    
    async componentDidMount() {

        await this._getLocationAsync();

        this.setState({ loading: false });
    }

	componentDidUpdate(){
	  if (this.state.positionState.latitude!=='0'){
		  this.state.loadingMap = true; 
		  this.state.loading = false;
	  }  
	}
	
	onRegionChange = (region) => {
		//this.setState({ region });
	   		
		//this.mapView.animateToRegion(region, 200);
		
	}

	_getLocationAsync = async()=> {
		let {status} = await Permissions.askAsync(Permissions.LOCATION);
		if(status!=='granted'){
		  this.setState({errorMessage:"Permissions not granted."});

		  return;
		}	
		let location = await Location.getCurrentPositionAsync(
			{
			enableHighAccuracy: true, timeout:5000, maxiumumAge: 10000
		  });
		  
		this.setState({ location });
		var lat = parseFloat(location.coords.latitude);
		var long = parseFloat(location.coords.longitude);
	
		var region = {
		  latitude: lat,
		  longitude: long,
		  latitudeDelta: LATITUDE_DELTA,
		  longitudeDelta: LONGITUDE_DELTA
		};
		
		this.setState({ positionState: region });
		this.setState({ markerPosition: region });


		
	};
 
  render() {
    return (
      <View style={styles.container}>
		{this.state.loadingMap &&
		<>
        <MapView
		  ref = {(ref)=>this.mapView=ref}
          style={StyleSheet.absoluteFillObject}
          provider={MapView.PROVIDER_GOOGLE}
		  onRegionChange={this.onRegionChange}
          initialRegion={this.state.positionState}>
			<MapView.Marker tracksViewChanges={false} coordinate={this.state.markerPosition}>
				<View style={styles.radius}>
				  <View style={styles.marker} />
				</View>
			  </MapView.Marker>
        </MapView>
		<View style={{ position: 'absolute', top: 10, width: '100%' }}>
			<TextInput
			  style={styles.searchbar}
			  placeholder={'Enter a location'}
			  placeholderTextColor={'#666'}
			/>
		</View>
		</>
		}
		{this.state.loading &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' />
          </View>
		} 
      </View>
    );
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(0, 112, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF"
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
});
