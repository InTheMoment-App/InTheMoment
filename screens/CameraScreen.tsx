import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Modal
} from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons, Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        margin: 20,
        alignItems: 'center',
    },
    buttonShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    flipCamera: {
        flex: 0.1,
        alignSelf: 'flex-start',
        right: 5,
        top: 40,
        position: 'absolute',
    },
    closeCamera: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        top: 40,
    },
    cameraRoll: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0,
    },
    cameraShutter: {
        flex: 1,
        justifyContent: 'flex-end',
    },

});

type CameraProps = {};
type CameraState = {
    hasPermission: boolean,
    cameraVisible: boolean,
    backCamera: boolean,
  };

export default class CameraScreen extends Component<CameraProps, CameraState> {
    constructor(props: CameraProps) {
        console.log("got to constructor");
        super(props);
        this.state = {
            hasPermission: false,
            cameraVisible: true,
            backCamera: true,
        };
    }

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, []);
    async componentDidMount() {
        console.log("GOT TO PERMISSIONS");
        const {status} = await Camera.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }

    setCameraHidden(){
        this.setState({ cameraVisible: false })
    }

    setCameraVisible(){
        this.setState({ cameraVisible : true })
    }

    changeCamera(){
        let cameraType;

        if ( this.state.backCamera ){
            cameraType = Camera.Constants.Type.front;
        } else {
            cameraType = Camera.Constants.Type.back
        }

        this.setState({ backCamera: !this.state.backCamera })

        return cameraType;
    }

    render() {
        console.log("GOT TO RENDER");
        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={this.state.cameraVisible}
                    transparent={true}
                >
                    <Camera style={styles.camera} type={Camera.Constants.Type.back}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.buttonShadow, styles.flipCamera]}
                                onPress={() => {
                                    this.changeCamera();
                                }}
                            >
                                <Ionicons size={32} name="md-camera-reverse" color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.buttonShadow, styles.closeCamera]}
                                onPress={() => {
                                    this.setCameraHidden()
                                }}
                            >
                                <Ionicons size={32} name="close" color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.buttonShadow, styles.cameraRoll]}
                            >
                                <Ionicons size={32} name="images-sharp" color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.buttonShadow, styles.cameraShutter]}
                            >
                                <Entypo size={90} name="circle" color="white" />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </Modal>
            </View>
        );
    }
}
