import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA9QJ9JqLhVpf5SM4Sewlw_tATH2IxGV1E",
  authDomain: "the-insight-a75b0.firebaseapp.com",
  projectId: "the-insight-a75b0",
  storageBucket: "the-insight-a75b0.appspot.com",
  messagingSenderId: "712863300348",
  appId: "1:712863300348:web:ff6168531110eaf5b37579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)

// export default app