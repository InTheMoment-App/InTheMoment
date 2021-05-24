import { StyleSheet } from 'react-native';
import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default styles;