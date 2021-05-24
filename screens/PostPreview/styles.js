import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    postButton: {
        position: 'absolute',
        margin: 16,
        right: 5,
        bottom: 30,
        color: 'white',
        backgroundColor: '#5170FF'
    },
    thumbnail: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
});

export default styles;