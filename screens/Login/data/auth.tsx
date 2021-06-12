import { auth } from 'utilities/firebase';
import { Alert } from 'react-native';
import logging from 'utilities/logging';

export const create = async (email: string, password: string) : Promise<boolean> => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        logging.debug('User account created & signed in!');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
        }

        logging.error(`Error creating account: ${  error}` );

        return false;
    }
};

export const login = async (email: string, password: string) : Promise<boolean> => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        logging.debug('User account signed in!');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
        }

        logging.error(`Error logging in: ${  error}` );

        return false;
    }
};

export const passwordReset = async (email: string) : Promise<boolean> => {
    try {
        await auth.sendPasswordResetEmail(email);
        logging.debug('Sent password reset email');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
        }

        logging.error(`Error sending password reset: ${  error}` );

        return false;
    }
};



