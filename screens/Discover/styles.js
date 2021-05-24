import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
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
    searchbarContainer: {
        position: 'absolute',
        width: '100%',
        top: 0,
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

export default styles;