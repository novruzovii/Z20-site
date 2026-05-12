import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIuX6OB6mnTMm684etZMV5Qz_CPatkufs",
  authDomain: "z-020-z.firebaseapp.com",
  projectId: "z-020-z",
  storageBucket: "z-020-z.firebasestorage.app",
  messagingSenderId: "173837203826",
  appId: "1:173837203826:web:84de25fcb2874a7335c5eb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
