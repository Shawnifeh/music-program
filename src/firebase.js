import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB39GTTnowQ_h4ucg8qbuC9fOWgIZq9geI",
  authDomain: "music-app-db33f.firebaseapp.com",
  projectId: "music-app-db33f",
  storageBucket: "music-app-db33f.appspot.com",
  messagingSenderId: "851772899115",
  appId: "1:851772899115:web:b3d94b22c379a82bd14f6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);