import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbbq0M0UYv0-x8oBZHg4YHXeXBNBl2Oew",
  authDomain: "react-netflix-clone-74bb0.firebaseapp.com",
  projectId: "react-netflix-clone-74bb0",
  storageBucket: "react-netflix-clone-74bb0.appspot.com",
  messagingSenderId: "546996486117",
  appId: "1:546996486117:web:49690a9346509ea2b5b90c",
  measurementId: "G-CHM0PVMF68"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);