import { firebase, auth } from 'utilities/firebase';
import logging from 'utilities/logging';

export const deleteAccount = (password: string) => {
    const user = auth.currentUser;

    if (!user) return;

    var credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    );

    user.reauthenticateWithCredential(credentials).then(() => {
        user.delete().then(() => {
            logging.debug('deleted account');
            return true;
        }).catch((error) => {
            logging.error(`Error deleting account: ${error}`);
        });
    }).catch((error) => {
        logging.error(`Error re-auth account: ${error}`);
    });
    return false;
};

export const signOut = () => {
    auth
        .signOut()
        .then(() =>
            logging.debug('user signed out')
        ).catch( error => {
            logging.error(`Error signing out: ${error}`);
        });
};