import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUSUjhnhpw4IOYyCeUtyVM64tTeY2_yQA",
    authDomain: "dash-bi.firebaseapp.com",
    projectId: "dash-bi",
    storageBucket: "dash-bi.appspot.com",
    messagingSenderId: "30682741145",
    appId: "1:30682741145:web:d3b4ddcdae3c89b1f5fb08",
    measurementId: "G-LR6WK8SL33"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;