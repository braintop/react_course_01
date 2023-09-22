import { auth, updateProfile } from "./FirebaseConfig";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";
const registerUser = async (email, password, displayName) => {
    let result = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: displayName,
            //photoURL: "https://example.com/jane-q-user/profile.jpg",
            //phoneNumebr: ""
        });

        console.log("=====1=====");
        console.log(auth.currentUser);
        console.log("=====2=====");
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
    return result;
};

function logout() {
    return auth.signOut();
}
async function loginUser(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
    onAuthStateChanged(auth, (user) => {
        handleAuthChange(user);
    });
};

const FirebaseAuthService = {
    registerUser,
    loginUser,
    logout,
    sendPasswordResetEmail: (email) => {
        sendPasswordResetEmail(auth, email);
    },
    loginWithGoogle,
    subscribeToAuthChanges,
};

export default FirebaseAuthService;
