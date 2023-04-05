import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastucture/theme";
import { Navigation } from "./src/infrastucture/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import {
  getAuth,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGki6CsgUpQMP5GJ5hHTjMZzRKtKaKTi8",
  authDomain: "mealstogo-86d0a.firebaseapp.com",
  projectId: "mealstogo-86d0a",
  storageBucket: "mealstogo-86d0a.appspot.com",
  messagingSenderId: "479068137932",
  appId: "1:479068137932:web:d653a713357dbcb3be5569",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
           <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
