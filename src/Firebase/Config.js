// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/app' // the core part of firebase package
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_T6WhnLbrxMNCetV7SoVxeil_P7yun4c",
    authDomain: "um6p-c0b9d.firebaseapp.com",
    projectId: "um6p-c0b9d",
    storageBucket: "um6p-c0b9d.appspot.com",
    messagingSenderId: "282702760020",
    appId: "1:282702760020:web:be2185f5f89d51f63e45c1",
    measurementId: "G-1W0S2TRYH8"
  };
// Step 1 : init firebase
// we use the firebaseConfig to init the connection to our firebase backend
firebase.initializeApp(firebaseConfig)
// Step 2 : Init the firestore service
// If we want to do any communication with the firestore db (eg. add documents)
// we can use projectFirestore variable
const projectFirestore = firebase.firestore()
//Step 3 : Export projectFirestore
// This will enable the use the firebase in different components
export {projectFirestore}
