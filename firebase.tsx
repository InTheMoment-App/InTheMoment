import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDtxk6vsP5I2b-m31wW8K1sryH5tbRLQHU",
    authDomain: "inthemoment-4e008.firebaseapp.com",
    projectId: "inthemoment-4e008",
    storageBucket: "inthemoment-4e008.appspot.com",
    messagingSenderId: "215677595036",
    appId: "1:215677595036:web:93901667c6f488ea232c59",
    measurementId: "G-0PWKSTJ7NM"
};

firebase.initializeApp(firebaseConfig);

export { firebase }