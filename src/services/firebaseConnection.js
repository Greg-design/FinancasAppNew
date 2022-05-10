import firebase from '@react-native-firebase/app'
import { initializeApp } from "firebase/app";
//import 'firebase/auth'
//import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCkuNIgjlA_LD0U7sMX-np1k-iAGJvOu5M",
    authDomain: "meuapp-eb027.firebaseapp.com",
    databaseURL: "https://meuapp-eb027-default-rtdb.firebaseio.com",
    projectId: "meuapp-eb027",
    storageBucket: "meuapp-eb027.appspot.com",
    messagingSenderId: "932254561686",
    appId: "1:932254561686:web:6d28b965c3d3be617459b7",
    measurementId: "G-5MGF4B0RGG"
  };
  

const app = initializeApp(firebaseConfig);


export default firebase