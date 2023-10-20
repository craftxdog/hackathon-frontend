// Import the functions you need from the SDKs you 
import { initializeApp} from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKMbnDOCpI5lHI63z700VUd3XReaNPJ6s",
  authDomain: "remenic-e2537.firebaseapp.com",
  projectId: "remenic-e2537",
  storageBucket: "remenic-e2537.appspot.com",
  messagingSenderId: "379750789101",
  appId: "1:379750789101:web:a5cf5c9eb7be14942b01e4"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };