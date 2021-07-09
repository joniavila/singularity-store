import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCMLVGQaz-mHONHIRQFV_L6Hq1z5uv-4B4",
    authDomain: "singularity-store.firebaseapp.com",
    projectId: "singularity-store",
    storageBucket: "singularity-store.appspot.com",
    messagingSenderId: "1090741538681",
    appId: "1:1090741538681:web:ecd1dad59cbd796449e9a8"
  })

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}