// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_gWPOxVMNO_HVdDUmWEyoN_pI4_djfGI",
    authDomain: "noww-ac7e4.firebaseapp.com",
    projectId: "noww-ac7e4",
    storageBucket: "noww-ac7e4.appspot.com",
    messagingSenderId: "521589669853",
    appId: "1:521589669853:web:df652e43d901696fbac034",
    measurementId: "G-3EFW6QHPLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);