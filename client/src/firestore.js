import app from '@/firebaseConfig'
import { getDoc, getFirestore, doc, setDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";

const db = getFirestore(app);

export async function updateUserSizes(sizes) {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    await setDoc(userRef, { sizes: sizes }, { merge: true });
}

export async function deleteAppUser() {
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

export async function getUserSizes() {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    const userSnap = await getDoc(userRef);

    if (userSnap) {
        return userSnap.data().sizes;
    }
}

export async function updateUserStyles(styles) {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    await setDoc(userRef, { styles: styles }, { merge: true });
}

export async function getUserStyles() {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    const userSnap = await getDoc(userRef);

    if (userSnap) {
        return userSnap.data().styles;
    }
}

export async function updateUserBeauties(beauties) {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    await setDoc(userRef, { beauties: beauties }, { merge: true });
}

export async function getUserBeauties() {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    const userSnap = await getDoc(userRef);

    if (userSnap) {
        return userSnap.data().beauties
    }
}

export async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    var products = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(doc.data());
    });
    return products;
}

export async function updateUserProducts(products) {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    await setDoc(userRef, { products: products }, { merge: true });
}

export async function getUserProducts() {
    const userRef = doc(db, 'users', JSON.parse(localStorage.getItem('LookLoomUser')).uid);
    const userSnap = await getDoc(userRef);

    if (userSnap) {
        return userSnap.data().products;
    }
}