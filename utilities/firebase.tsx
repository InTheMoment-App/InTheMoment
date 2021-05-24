import firebaseConfig from 'config/firebase.config'
import firebase from 'firebase/app';
import "firebase/storage";


if ( !firebase.apps.length ){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
export const storage = firebase.storage();