import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FAB, List } from 'react-native-paper';
import { TextField } from 'react-native-ui-lib';
import validator from 'validator'; // use for register not login
import { login } from './data/auth';
import styles from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateFieldsAndLogin = () => {
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
        
        login(email, password);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <TextField
                    maxLength={120}
                    onChangeText={ e => setEmail(e)}
                    title="EMAIL ADDRESS"
                    error={emailError}
                />
                <TextField
                    maxLength={120}
                    onChangeText={ pass => setPassword(pass)}
                    title="PASSWORD"
                    error={passwordError}
                    secureTextEntry
                />
                <FAB
                    style={styles.loginButton}
                    label="Login"
                    onPress={() =>{
                        validateFieldsAndLogin();
                    }}
                />
                <FAB
                    style={styles.registerButton}
                    label="Register"
                    onPress={() =>{
                        console.log('register');
                    }}
                />
            </View>
        </SafeAreaView>
    );
}


export default Login;
