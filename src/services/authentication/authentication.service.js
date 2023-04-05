import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};
