// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIuX6OB6mnTMm684etZMV5Qz_CPatkufs",
  authDomain: "z-020-z.firebaseapp.com",
  projectId: "z-020-z",
  storageBucket: "z-020-z.firebasestorage.app",
  messagingSenderId: "173837203826",
  appId: "1:173837203826:web:84de25fcb2874a7335c5eb",
  measurementId: "G-CXVC79R3ZN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc };
import { getStorage, ref, uploadBytes, getDownloadURL } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const storage = getStorage(app);
