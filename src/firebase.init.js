// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJM9QClnAsLRAojP0KmTcEUm2bVLuyRVk",
    authDomain: "genius-car-services-60.firebaseapp.com",
    projectId: "genius-car-services-60",
    storageBucket: "genius-car-services-60.appspot.com",
    messagingSenderId: "952159599751",
    appId: "1:952159599751:web:747563a60a0dd3ae068c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;