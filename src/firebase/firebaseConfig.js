// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWWEW6uOHqkcQuTCCbUjwahYvI_D85Jyg",
  authDomain: "sulman-qureshi.firebaseapp.com",
  projectId: "sulman-qureshi",
  storageBucket: "sulman-qureshi.appspot.com",
  messagingSenderId: "40334794958",
  appId: "1:40334794958:web:5c4c5bb3d9564931e1309f",
  measurementId: "G-53BKL04P7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
