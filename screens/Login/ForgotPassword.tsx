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
import { passwordReset } from './data/auth';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateFieldAndReset = () => {
        let threwError = false;

        if (!validator.isEmail(email)){
            setEmailError('Invalid Email');
            threwError = true;
        }

        if ( threwError )
            return;
        
       let success = passwordReset(email);

       if (!success){
           console.log("woops could not send the password reset email");
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
                            maxLength={64}
                            onChangeText={ e => setEmail(e)}
                            title="EMAIL ADDRESS"
                            error={emailError}
                        />
                        <FAB
                            style={styles.mainButton}
                            label="Reset Password"
                            onPress={() =>{
                                Keyboard.dismiss();
                                validateFieldAndReset();
                            }}
                        />
                        <View style={styles.altActionBlock}>
                            <TouchableOpacity
                                onPress={() =>{
                                    navigation.navigate('Login');
                                }}
                            >
                                <Text style={styles.boldedLink}>Back To Login</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}


export default React.memo(ForgotPassword);
