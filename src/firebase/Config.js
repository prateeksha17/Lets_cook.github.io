import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUQ56silWXmDW_YNTs09aqmUrpmzsu8PY",
    authDomain: "lets-cook-35504.firebaseapp.com",
    projectId: "lets-cook-35504",
    storageBucket: "lets-cook-35504.appspot.com",
    messagingSenderId: "219594986063",
    appId: "1:219594986063:web:4e19a955e7bf6f26c3503a"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore = firebase.firestore()

  export { projectFirestore }