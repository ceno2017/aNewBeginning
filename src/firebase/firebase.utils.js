import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCv2d7ty3F049amOYBeLsIkCwmWzsBonw8",
  authDomain: "plasma-envoy-138523.firebaseapp.com",
  projectId: "plasma-envoy-138523",
  storageBucket: "plasma-envoy-138523.appspot.com",
  messagingSenderId: "625807933387",
  appId: "1:625807933387:web:2e184ac9797c9436d0804e",
  measurementId: "G-HMCDQMWZBY"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
     console.log('error creating user', error.message);
    }
  }
   return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
