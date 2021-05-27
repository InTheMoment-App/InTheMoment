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
import validator from 'validator'; // use for register not login
import { login } from './data/auth';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigation = useNavigation();

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
        
       let success = login(email, password);

       if (!success){
           console.log("woops error didn't log in");
       }
       
       navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={ () => Keyboard.dismiss()}
                accessible={false}
            >
                <View>
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
                        <View style={styles.registerBlock}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity
                                onPress={() =>{
                                    console.log('register');
                                }}
                            >
                                <Text style={styles.signUpText}>Sign Up Now</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity
                        onPress={() =>{
                            console.log('forgot password');
                        }}
                        style={ styles.forgotPassword }
                    >
                        <Text style={styles.signUpText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}


export default Login;
