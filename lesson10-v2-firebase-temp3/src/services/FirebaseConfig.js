import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Initialize Firebase
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// REACT_APP_FIREBASE_API_KEY=AIzaSyBiIuZcJfe9yDAdYH9nDZKmDViVyHOjSA4
// REACT_APP_FIREBASE_AUTH_DOMAIN=test3-9e04d.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=test3-9e04d
// REACT_APP_FIREBASE_STORAGE_BUCKET=test3-9e04d.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=362877734491
// REACT_APP_FIREBASE_APP_ID =1:362877734491:web:1df9b1f6114a283c50797e

console.log(config);
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const db = getFirestore();
const shiftsCollectionRef = collection(db, "shifts");

export { auth, db, updateProfile, shiftsCollectionRef };
