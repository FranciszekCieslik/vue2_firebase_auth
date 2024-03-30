import app from '@/firebaseConfig'
import {getDoc, getFirestore, doc, setDoc } from "firebase/firestore"; 

const db = getFirestore(app);

export async function updateUserSizes(){
var sizes = JSON.parse(localStorage.getItem('LookLoomUserSizes'));
const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
await setDoc(userRef, { sizes:  sizes}, { merge: true });
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