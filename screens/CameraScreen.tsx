import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';
import {
    StyleSheet, Platform, View, TouchableOpacity, Alert,
} from 'react-native';

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
        bottom: 30,
    },
    cameraShutter: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 15,
    },

});

export default function CameraScreen() {
    let camera: Camera;
    const navigation = useNavigation();
    const [media, setMedia] = useState<string>('');
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await Camera.requestPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Sorry, we need camera permissions to make this work!');
                }
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const changeCamera = () => {
        if (type === Camera.Constants.Type.back) {
            setType(Camera.Constants.Type.front);
            return;
        }

        setType(Camera.Constants.Type.back);
    };

    const takePicture = async () => {
        const photo: any = await camera.takePictureAsync();
        setMedia(photo.uri);
        navigation.navigate('PostPreview', {
            media: photo.uri
        });
    };

    const takeVideo = async () => {
        const video: any = await camera.recordAsync({
            maxDuration: 10,
        });
        try {
            const { uri } = await VideoThumbnails.getThumbnailAsync( video.uri, { time: 0 });

            navigation.navigate('PostPreview', {
                media: uri
            });
        } catch(e) {
            console.warn(e);
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false, // turned off editing because of a weird crop workflow on ios
            aspect: [4, 3],
            quality: 1,
            videoMaxDuration: 10
        });

        if (!result.cancelled) {
            navigation.navigate('PostPreview', {
                media: result.uri
            });
        }
    };

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                ref={(r) => {
                    camera = r;
                }}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.buttonShadow, styles.flipCamera]}
                        onPress={() => {
                            changeCamera();
                        }}
                    >
                        <Ionicons size={32} name="md-camera-reverse" color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonShadow, styles.closeCamera]}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Ionicons size={32} name="close" color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonShadow, styles.cameraRoll]}
                        onPress={() => {
                            pickImage();
                        }}
                    >
                        <Ionicons size={32} name="images-sharp" color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonShadow, styles.cameraShutter]}
                        onPress={() => {
                            takePicture();
                        }}
                        onLongPress={() => {
                            takeVideo();
                        }}
                        onPressOut={() => {
                            camera.stopRecording();
                        }}
                    >
                        <Entypo size={90} name="circle" color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
