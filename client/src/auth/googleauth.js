import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app  from "../firebaseConfig.js";
import router from "@/router/index.js";
import {getUserSizes, getUserStyles } from "@/firestore.js";

const auth = getAuth(app);

export function login_google() {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then(async (result) => {
            const user = result.user;
            await localStorage.setItem('LookLoomUser', JSON.stringify(
                {
                name : user.displayName.toString(),
                photo : user.photoURL.toString(),
                uid: user.uid.toString(),
                email: user.email.toString()
                }
            ));
            await getUserStyles();
            await getUserSizes(); 
        }).then(()=>{
            router.push('/');
            router.go();
        }).catch((error) => {
            router.push('/loginfailed');
            console.log(error);
        });
}

// SIGNOUT

export function logout_google() {
    signOut(auth).then(() => {
        localStorage.clear();
        console.log(`Signout success`);
        if(router.currentRoute.path == '/'){
            router.go();
        }else{
            router.push('/')
        }
    }).catch((error) => {
        console.log(`Error:${error}`)
    });
}
