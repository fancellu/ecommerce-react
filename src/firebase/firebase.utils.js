import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyBnnJtoHyoOdi_YmJfU20FpNqSgCIik2BM",
        authDomain: "react-shop-db-63a4b.firebaseapp.com",
    databaseURL: "https://react-shop-db-63a4b.firebaseio.com",
    projectId: "react-shop-db-63a4b",
    storageBucket: "",
    messagingSenderId: "183706946465",
    appId: "1:183706946465:web:58eb2a86b4412820"
};

firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase