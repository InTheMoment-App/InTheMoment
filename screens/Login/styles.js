import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib'
import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
    },
    loginButton: {
        color: 'white',
        backgroundColor: Colors.blue20,
        marginBottom: 10,
    },
    registerButton: {
        color: 'white',
        backgroundColor: Colors.green20,
    }
});

export default styles;