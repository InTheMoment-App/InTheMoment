import firebase from 'firebase/app';
import { 
    devEnvironment, 
    firebaseConfig,
    firebaseDevConfig
} from 'config/firebase.config'
import Constants from 'expo-constants';

// This version of firebase requires the import 
// like this but Eslint doesn't like it

/* eslint-disable import/no-duplicates */
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
/* eslint-enable import/no-duplicates */

const initialSetup = !firebase.apps.length;

if ( initialSetup ) {
    if ( devEnvironment )
        firebase.initializeApp(firebaseDevConfig);
    else
        firebase.initializeApp(firebaseConfig);
}

const fbAuth = firebase.auth();
const fbFirestore = firebase.firestore();
const fbStorage = firebase.storage();

if ( initialSetup && devEnvironment ) {
    const origin = Constants.manifest.debuggerHost?.split(":").shift() || "localhost";

    fbAuth.useEmulator(`http://${origin}:9099`);
    fbFirestore.useEmulator(origin, 8080, { ssl: false });
    fbStorage.useEmulator(origin, 9199)
} 

export { firebase };
export const auth = fbAuth;
export const firestore = fbFirestore;
export const storage = fbStorage;