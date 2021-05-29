import { auth } from 'utilities/firebase';

export const create = async (email: string, password: string) : Promise<boolean> => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        console.log('User account created & signed in!');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error(error);
        return false;
    }
};

export const login = async (email: string, password: string) : Promise<boolean> => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        console.log('User account signed in!');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        return false;
    }
};

export const passwordReset = async (email: string) : Promise<boolean> => {
    try {
        await auth.sendPasswordResetEmail(email);
        console.log('Sent password reset email');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        return false;
    }
};



