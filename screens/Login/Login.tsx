import React, { useState } from 'react';
import { 
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback, 
    SafeAreaView, 
    View 
} from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { TextField } from 'react-native-ui-lib';
import validator from 'validator';
import { login } from './data/auth';
import styles from './styles';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateFieldsAndLogin = async() => {
        let threwError = false;

        if (!validator.isEmail(email)){
            setEmailError('Invalid Email');
            threwError = true;
        }

        if (validator.isEmpty(password)){
            setPasswordError('Empty Password');
            threwError = true;
        }

        if ( threwError )
            return;
        
        const success = await login(email, password);

        if (!success){
            // console.log("woops error didn't log in");
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={ () => Keyboard.dismiss()}
                accessible={false}
            >
                <View>
                    <View style={styles.notLoggedInContainer}>
                        <TextField
                            maxLength={120}
                            onChangeText={ e => setEmail(e)}
                            title="EMAIL ADDRESS"
                            error={emailError}
                        />
                        <TextField
                            maxLength={64}
                            onChangeText={ pass => setPassword(pass)}
                            title="PASSWORD"
                            error={passwordError}
                            secureTextEntry
                        />
                        <FAB
                            style={styles.mainButton}
                            label="Login"
                            onPress={() =>{
                                Keyboard.dismiss();
                                validateFieldsAndLogin();
                            }}
                        />
                        <View style={styles.altActionBlock}>
                            <Text>Don&apos;t have an account? </Text>
                            <TouchableOpacity
                                onPress={() =>{
                                    navigation.navigate('Register');
                                }}
                            >
                                <Text style={styles.boldedLink}>Sign Up Now</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity
                        onPress={() =>{
                            navigation.navigate('ForgotPassword')
                        }}
                        style={ styles.forgotPassword }
                    >
                        <Text style={styles.boldedLink}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}


export default React.memo(Login);
