// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc2bH3iamTV1v7x2ECiPtMCfkgD0OXqc0",
  authDomain: "gallery-app-7429c.firebaseapp.com",
  projectId: "gallery-app-7429c",
  storageBucket: "gallery-app-7429c.appspot.com",
  messagingSenderId: "288270340035",
  appId: "1:288270340035:web:272a90552922e21687f776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);