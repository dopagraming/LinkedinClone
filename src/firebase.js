import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAvrZOSJlT5xxQO4ZsFKFqkhQbF_xRnrr4",
  authDomain: "linkedin-ece53.firebaseapp.com",
  projectId: "linkedin-ece53",
  storageBucket: "linkedin-ece53.appspot.com",
  messagingSenderId: "917633125015",
  appId: "1:917633125015:web:e9f82e9ad12e9328ddb7d2",
  measurementId: "G-WBH0ND142Y",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, db, provider, storage };
