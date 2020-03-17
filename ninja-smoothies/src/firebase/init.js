import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCRe95SUzrdrNRkbAJPQx9Csd7iTXq8aDg",
    authDomain: "ninja-smoothies-e4e9b.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-e4e9b.firebaseio.com",
    projectId: "ninja-smoothies-e4e9b",
    storageBucket: "ninja-smoothies-e4e9b.appspot.com",
    messagingSenderId: "633328006927",
    appId: "1:633328006927:web:55dec733250b33c68cb07a",
    measurementId: "G-KWD5Y7EDJX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })


// export firestore database We used firestore() function to say we want to export the database section of this firebaseApp so we can import it to another file
export default firebaseApp.firestore();