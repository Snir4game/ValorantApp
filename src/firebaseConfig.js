import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCsQintY-MR3hNpVtjGOcIld2DPnEeRGYM",
    authDomain: "elifinel-f4ee4.firebaseapp.com",
    projectId: "elifinel-f4ee4",
    storageBucket: "elifinel-f4ee4.appspot.com",
    messagingSenderId: "440606802721",
    appId: "1:440606802721:web:ee340646470eef4702f460",
    measurementId: "G-HYKM0CKRPX"
    };
    firebase.initializeApp(firebaseConfig);
    export default firebase;
