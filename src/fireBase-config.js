import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyArmUFQ-X5ImCVivBuo-UfJvwE5r2bLnSM",
  authDomain: "blog-61861.firebaseapp.com",
  projectId: "blog-61861",
  storageBucket: "blog-61861.appspot.com",
  messagingSenderId: "395263473960",
  appId: "1:395263473960:web:11b52fb12b11944a99b81d"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)