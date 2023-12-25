// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYmDKZ2BGpyGeVLEKWfpaRspGD2s4q5Hw",
  authDomain: "validacaologin-c47ee.firebaseapp.com",
  projectId: "validacaologin-c47ee",
  storageBucket: "validacaologin-c47ee.appspot.com",
  messagingSenderId: "46782411974",
  appId: "1:46782411974:web:2fe687df59aa3a089853c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export default app;