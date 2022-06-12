import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3_oaBz1CuKkcHapQYF8IkNpFEYQIiZ9o",
    authDomain: "docs-clone-c1d32.firebaseapp.com",
    projectId: "docs-clone-c1d32",
    storageBucket: "docs-clone-c1d32.appspot.com",
    messagingSenderId: "1094978406277",
    appId: "1:1094978406277:web:eb9d186a0137a14be966ec",
    measurementId: "G-LZY6ESC49V"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)