import { auth } from 'utilities/firebase';


export const create = (email: string, password: string) => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
    
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
    
            console.error(error);
        });
};

export const login = (email: string, password: string) => {
    auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account signed in!');
        })
        .catch(error => {
            // if (error.code === 'auth/email-already-in-use') {
            //     console.log('That email address is already in use!');
            // }
    
            // if (error.code === 'auth/invalid-email') {
            //     console.log('That email address is invalid!');
            // }
            console.log(error.code);
            console.error(error);
        });
};


