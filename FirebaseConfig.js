import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA-mCpPa1C8yCe3QPcDkAUERXFt5prRi0",
  authDomain: "fir-cd40a.firebaseapp.com",
  projectId: "fir-cd40a",
  storageBucket: "fir-cd40a.appspot.com",
  messagingSenderId: "754020825701",
  appId: "1:754020825701:web:7391f23c36fc2c5b66e48c",
  measurementId: "G-KZRF350XY9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
