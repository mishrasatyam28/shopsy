import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGLLI1RRaDnDTnA3Pua7PyvpB1FToKAHk",
  authDomain: "webwise-ecommerce.firebaseapp.com",
  projectId: "webwise-ecommerce",
  storageBucket: "webwise-ecommerce.appspot.com",
  messagingSenderId: "402831776856",
  appId: "1:402831776856:web:61e9b09edd8ef553aabe2d",
  measurementId: "G-91CK308E4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
