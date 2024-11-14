import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDy-ZjI9dhzudUugya2nZCCMRUlqIgUfvs",
  authDomain: "fyt-flyyourtech.firebaseapp.com",
  projectId: "fyt-flyyourtech",
  storageBucket: "fyt-flyyourtech.firebasestorage.app",
  messagingSenderId: "1079237041732",
  appId: "1:1079237041732:web:8609c287f234b0b5a9a611",
  measurementId: "G-C9MFCG8P4G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);