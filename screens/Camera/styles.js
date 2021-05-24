import { StyleSheet } from 'react-native';

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
    cameraFlash: {
        flex: 0.1,
        alignSelf: 'flex-start',
        right: 5,
        top: 100,
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

export default styles;