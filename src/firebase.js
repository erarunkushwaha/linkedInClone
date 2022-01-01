import firebase  from "firebase";;
const firebaseConfig = {
    apiKey: "AIzaSyANq2FbbQcamBQiaJEp1i3_WuS2R37Tf9g",
    authDomain: "linked-clone-test.firebaseapp.com",
    projectId: "linked-clone-test",
    storageBucket: "linked-clone-test.appspot.com",
    messagingSenderId: "780381024556",
    appId: "1:780381024556:web:cb813022ea2835a249fc89",
    measurementId: "G-V7SQSD5GM5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};