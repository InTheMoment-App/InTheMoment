import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity,
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

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.buttonShadow, styles.flipCamera]}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                            );
                        }}
                    >
                        <Ionicons size={32} name="md-camera-reverse" color="white" />
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
        </View>
    );
}
