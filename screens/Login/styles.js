import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib'
import Layout from 'constants/Layout'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    notLoggedInContainer: {
        flex: 1,
        justifyContent: 'center',
        width: Layout.window.width * 0.9,
    },
    mainButton: {
        color: 'white',
        backgroundColor: Colors.blue20,
        marginBottom: 40,
        alignSelf: 'stretch',
    },
    altActionBlock: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    boldedLink: {
        fontWeight: 'bold'
    },
    forgotPassword: {
        alignSelf: 'center',
    }
});

export default styles;