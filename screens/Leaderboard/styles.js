import { StyleSheet } from 'react-native';
import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});

export default styles;