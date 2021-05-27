import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib'
import Layout from 'constants/Layout'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        width: Layout.window.width * 0.9,
    },
    loginButton: {
        color: 'white',
        backgroundColor: Colors.blue20,
        marginBottom: 40,
        alignSelf: 'stretch',
    },
    registerBlock: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    signUpText: {
        fontWeight: 'bold'
    },
    forgotPassword: {
        alignSelf: 'center',
    }
});

export default styles;