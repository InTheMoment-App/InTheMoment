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
import { create } from './data/auth';
import styles from './styles';

const Register = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confPasswordError, setConfPasswordError] = useState('');

    const passwordsMatch = () => password.localeCompare(confPassword) === 0;

    const validateFieldsAndCreateAccount = async() => {
        let threwError = false;

        if (!validator.isEmail(email)){
            setEmailError('Invalid email');
            threwError = true;
        }

        /*
         we will add a password strength mechanic later, this performs it but doesn't display it
         minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        */
        if (!validator.isStrongPassword(password)){
            setPasswordError('Password is not strong enough');
            threwError = true;
        }

        if (!passwordsMatch){
            setConfPasswordError('Passwords do not match');
            threwError = true;
        }

        if ( threwError )
            return;
        
        const success = await create(email, password);

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
                        <TextField
                            maxLength={64}
                            onChangeText={ pass => setConfPassword(pass)}
                            title="CONFIRM PASSWORD"
                            error={confPasswordError}
                            secureTextEntry
                        />
                        <FAB
                            style={styles.mainButton}
                            label="Register"
                            onPress={() =>{
                                Keyboard.dismiss();
                                validateFieldsAndCreateAccount();
                            }}
                        />
                        <View style={styles.altActionBlock}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity
                                onPress={() =>{
                                    navigation.navigate('Login');
                                }}
                            >
                                <Text style={styles.boldedLink}>Login Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}


export default React.memo(Register);
