// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgO__pkapTiJg1jIK-dYc7WxXM_3rEazs",
  authDomain: "user-email-password-auth-31b44.firebaseapp.com",
  projectId: "user-email-password-auth-31b44",
  storageBucket: "user-email-password-auth-31b44.appspot.com",
  messagingSenderId: "933471178150",
  appId: "1:933471178150:web:cf4620fc5aaf969d555367",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
