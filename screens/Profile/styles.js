import { StyleSheet } from 'react-native';
import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerStyle: {
        width: Layout.card.width,
        height: Layout.card.height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 0,
        overflow: 'hidden',
    },
    tileButton: {
        flex: 1/3,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: Layout.tiles.width, 
        height: Layout.tiles.width,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;