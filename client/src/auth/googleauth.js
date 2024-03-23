import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app  from "../firebaseConfig.js";
import router from "@/router/index.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function login_google() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(`token:${token}`);
            const user = result.user;
            sessionStorage.setItem('user', user);
            sessionStorage.setItem('photoURL',user.photoURL.toString())
        }).then(()=>{
            router.push('/');
            router.go();
        })
        // .catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.customData.email;
        //     // The AuthCredential type that was used.
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     // ...
        // });
}

// SIGNOUT

export function logout_google() {
    signOut(auth).then(() => {
        sessionStorage.clear();
        console.log(`Signout success`);
        router.go();
    }).catch((error) => {
        console.log(`Error:${error}`)
    });
}
