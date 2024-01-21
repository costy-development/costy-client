// import {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
//   FIREBASE_MEASUREMENT_ID,
// } from "@/config/env";
// import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import { GoogleLoginArgsT } from "@/interface/db/auth.types";

// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
//   measurementId: FIREBASE_MEASUREMENT_ID,
// };

// const app: FirebaseApp = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const googleAuthProvider = new GoogleAuthProvider();

// async function firebaseGoogleLogin(): Promise<GoogleLoginArgsT> {
//   try {
//     const { user } = await signInWithPopup(auth, googleAuthProvider);

//     const userCredentials = {
//       username: user.displayName || "",
//       email: user.email || "",
//       avatar: user.photoURL || "",
//     };

//     return userCredentials;
//   } catch (error: any) {
//     console.log(error);
//     throw Error(error);
//   }
// }

// export { firebaseGoogleLogin };
