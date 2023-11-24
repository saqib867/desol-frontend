// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW1f7Xv4QvHzjQ7lHqyC0wgrta3p9mi6g",
  authDomain: "desol-82633.firebaseapp.com",
  projectId: "desol-82633",
  storageBucket: "desol-82633.appspot.com",
  messagingSenderId: "92707130002",
  appId: "1:92707130002:web:bd1e0dba9d91e4edf1344b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage,app };