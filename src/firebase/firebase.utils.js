import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCux-1M0HNqO8fu4_Ajtvgd1O2o4JeRQyA",
    authDomain: "crwn-db-ce92f.firebaseapp.com",
    databaseURL: "https://crwn-db-ce92f.firebaseio.com",
    projectId: "crwn-db-ce92f",
    storageBucket: "crwn-db-ce92f.appspot.com",
    messagingSenderId: "14887096481",
    appId: "1:14887096481:web:8165f81d408bb8958720e0",
    measurementId: "G-X2M92T4535"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;