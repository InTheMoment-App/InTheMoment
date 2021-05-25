import firebaseConfig from 'config/firebase.config'
import firebase from 'firebase/app';

// This version of firebase requires the import 
// like this but Eslint doesn't like it

/* eslint-disable import/no-duplicates */
import 'firebase/storage';
import 'firebase/firestore';
/* eslint-enable import/no-duplicates */

if ( !firebase.apps.length ){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
export const storage = firebase.storage();
export const firestore = firebase.firestore();