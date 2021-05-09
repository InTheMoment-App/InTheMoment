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
    closeModal: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        top: 50,
        position: 'absolute',
        left: 20,
    },
});

export function CloseModalButton( props : any ){
    const navigation = useNavigation();
    return(
        <View style={ styles.buttonContainer} {...props}>
            <TouchableOpacity
                style={styles.closeModal}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Ionicons size={32} name="close" color="white" />
            </TouchableOpacity>
        </View>
    );
}