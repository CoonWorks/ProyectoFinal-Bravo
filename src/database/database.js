import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUCNv00kZJpWng-RR3Dp1oZrdfS0zTJls",
    authDomain: "ecommerce-88020-6dc17.firebaseapp.com",
    projectId: "ecommerce-88020-6dc17",
    storageBucket: "ecommerce-88020-6dc17.firebasestorage.app",
    messagingSenderId: "554844614164",
    appId: "1:554844614164:web:84cb1de249e420faab8101"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore();

export default database;