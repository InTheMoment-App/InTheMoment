import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        top: 0,
        zIndex:999,
    },
    buttonShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    closeModal: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        top: 50,
        position: 'absolute',
        left: 20,
    },
});

export default function CloseModalButton( props : any ){
    const navigation = useNavigation();
    return(
        <View style={ styles.buttonContainer} {...props}>
            <TouchableOpacity
                style={[styles.buttonShadow, styles.closeModal]}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Ionicons size={32} name="close" color="white" />
            </TouchableOpacity>
        </View>
    );
}