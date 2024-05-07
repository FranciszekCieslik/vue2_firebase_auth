import app from '@/firebaseConfig'
import {getDoc, getFirestore, doc, setDoc, deleteDoc} from "firebase/firestore"; 
import { getAuth, deleteUser } from "firebase/auth";

const db = getFirestore(app);

export async function updateUserSizes(){
var sizes = JSON.parse(localStorage.getItem('LookLoomUserSizes'));
const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
await setDoc(userRef, { sizes:  sizes}, { merge: true });
}

export async function deleteAppUser(){
    //remove user data 
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    await deleteDoc(userRef);

    //remove user
    const auth = getAuth();
    const user = auth.currentUser;
    await deleteUser(user).then(() => {
  // User deleted.
}).catch((error) => {
    console.log(error)
});
}

export async function getUserSizes(){
const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
const userSnap = await getDoc(userRef);

if(userSnap){
    localStorage.setItem('LookLoomUserSizes', JSON.stringify(
        userSnap.data().sizes
    ))
    console.log(userSnap.data().sizes)
}
}

