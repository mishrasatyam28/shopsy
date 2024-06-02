// import React from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase/FirebaseConfig";
// import { useNavigate } from "react-router-dom";

// function OAuth() {
//   const navigate = useNavigate();

//   const handleGoogleClick = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       //   const auth = getAuth(app);
//       // pop up request here
//       const result = await signInWithPopup(auth, provider);
//       // sending data to the backend
//       navigate("/");
//     } catch (error) {
//       console.log("could not sign in with google", error);
//     }
//   };
//   return (
//     <div>
//       <button
//         onClick={handleGoogleClick}
//         className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
//       >
//         Login with Google
//       </button>
//     </div>
//   );
// }

// export default OAuth;

// src/components/OAuth.js

import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function OAuth() {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, userDoc);
      toast.success("Sign-in successful");

      navigate("/");
    } catch (error) {
      console.log("Could not sign in with Google", error);
      toast.error("Sign-in failed");
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleClick}
        className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
      >
        Login with Google
      </button>
    </div>
  );
}

export default OAuth;
