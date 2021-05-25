import { StyleSheet } from 'react-native';
import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    settingsContainer: {
        flex: 1,
        width: Layout.card.width,
        marginBottom: 5,
        overflow: 'hidden',
    },
});

export default styles;