import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAV9cbQPddGS927a-XJkgkMdiwwZNUbV9I",
  authDomain: "petermark-9ba50.firebaseapp.com",
  databaseURL: "https://petermark-9ba50-default-rtdb.firebaseio.com",
  projectId: "petermark-9ba50",
  storageBucket: "petermark-9ba50.firebasestorage.app",
  messagingSenderId: "892056005886",
  appId: "1:892056005886:web:f9d7858357d71cf9ea89af"
};

// Prevent re-initialization in dev/hot-reload
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const database = getDatabase(app);