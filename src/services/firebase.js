// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf6mhLKreFFrckOFpfM1pBG1g1RmSrRYs",
  authDomain: "dango-ecommerce.firebaseapp.com",
  projectId: "dango-ecommerce",
  storageBucket: "dango-ecommerce.appspot.com",
  messagingSenderId: "793549072303",
  appId: "1:793549072303:web:956b3cee77a43af159f15a",
  measurementId: "G-DK5WTDK2PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
