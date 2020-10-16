import * as firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjJysfAL8r8juYoFMi8Bf2M_XPV9heOFg",
  authDomain: "aerotrack-783cd.firebaseapp.com",
  databaseURL: "https://aerotrack-783cd.firebaseio.com",
  projectId: "aerotrack-783cd",
  storageBucket: "aerotrack-783cd.appspot.com",
  messagingSenderId: "434852878773",
  appId: "1:434852878773:web:66be903bbb29567ffde1fc",
  measurementId: "G-3P7SKBHPZS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
