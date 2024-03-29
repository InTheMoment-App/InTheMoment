import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import React, { useState, useEffect } from 'react';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';
import {
    Platform, View, TouchableOpacity, Alert,
} from 'react-native';
import ZoomView from 'components/ZoomView';
import logging from 'utilities/logging';
import styles from './styles';

const ZOOM_F = Platform.OS === 'ios' ? 0.005 : 0.08;

const CameraScreen = () => {
    let camera: Camera;
    const navigation = useNavigation();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

    const [zoom, setZoom] = useState(0);
    const [prevPinch, setPrevPinch] = useState(0);

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

    const changeFlash = () => {
        switch(flash) {
            case Camera.Constants.FlashMode.off:
                setFlash(Camera.Constants.FlashMode.auto);
                break;
            case Camera.Constants.FlashMode.auto:
                setFlash(Camera.Constants.FlashMode.on);
                break;
            case Camera.Constants.FlashMode.on:
                setFlash(Camera.Constants.FlashMode.off);
                break;
            default: break;
        }
    };
    
    const flashIcon = () => {
        switch(flash) {
            case Camera.Constants.FlashMode.off:
                return <MaterialIcons size={32} name="flash-off" color="white" />
            case Camera.Constants.FlashMode.auto:
                return <MaterialIcons size={32} name="flash-auto" color="white" />
            case Camera.Constants.FlashMode.on:
                return <MaterialIcons size={32} name="flash-on" color="white" />
            default:
                return <MaterialIcons size={32} name="flash-off" color="white" />
        }
    };

    const takePicture = async () => {
        const photo: any = await camera.takePictureAsync();
        const compressedImage = await ImageManipulator.manipulateAsync(
            photo.uri, 
            [ { resize: {width: 1080} } ],
            { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
        );
        
        navigation.navigate('PostPreview', {
            media: compressedImage.uri
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
        } catch(error) {
            logging.error(error)
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

    const onPinchStart = () => {
        setPrevPinch(1);
    }

    const onPinchEnd = () => {
        setPrevPinch(1);
    }

    const onPinchProgress = (p) => {
        const p2 = p - prevPinch
        if(p2 > 0 && p2 > ZOOM_F) {
            setPrevPinch(p);
            setZoom(Math.min(zoom + ZOOM_F, 1));
        }
        else if (p2 < 0 && p2 < -ZOOM_F) {
            setPrevPinch(p);
            setZoom(Math.max(zoom - ZOOM_F, 0));
        }
    }

    return (
        <ZoomView
            onPinchEnd={onPinchEnd}
            onPinchStart={onPinchStart}
            onPinchProgress={onPinchProgress}
        >
            <View style={styles.container}>
                <Camera
                    style={styles.camera}
                    type={type}
                    zoom={zoom}
                    flashMode={flash}
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
                            style={[styles.buttonShadow, styles.cameraFlash]}
                            onPress={() => {
                                changeFlash();
                            }}
                        >
                            { flashIcon() }
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
        </ZoomView>

    );
}

export default CameraScreen;
