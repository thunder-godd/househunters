// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsx9v5k069FYFf0g4g5zsydScBqdlReLE",
  authDomain: "househunters-d9361.firebaseapp.com",
  projectId: "househunters-d9361",
  storageBucket: "househunters-d9361.appspot.com",
  messagingSenderId: "1023599326109",
  appId: "1:1023599326109:web:fe56bfe61e55b68a223574"
  storageBucket:"gs://househunters-d9361.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const storage = getStorage(app);

// try {
//   const listingsRef = await addDoc(collection(db, "listings"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }