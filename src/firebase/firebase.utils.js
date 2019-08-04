import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBnnJtoHyoOdi_YmJfU20FpNqSgCIik2BM",
    authDomain: "react-shop-db-63a4b.firebaseapp.com",
    databaseURL: "https://react-shop-db-63a4b.firebaseio.com",
    projectId: "react-shop-db-63a4b",
    storageBucket: "",
    messagingSenderId: "183706946465",
    appId: "1:183706946465:web:58eb2a86b4412820"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    console.log(snapshot)
    if (!snapshot.exists) {
        const {displayName, email} = userAuth
        const createAt = new Date()
        try {
            console.log('saving new user')
            await userRef.set({
                displayName, email, createAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase