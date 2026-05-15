// Firebase 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⚠️ 아래 값을 본인 Firebase 콘솔에서 복사한 값으로 바꿔주세요
const firebaseConfig = {
  apiKey: "AIzaSyC4-EYn0W4-BxFn4X1FXZUB9M26NmNtiB0",
  authDomain: "highschool-english-e0918.firebaseapp.com",
  projectId: "highschool-english-e0918",
  storageBucket: "highschool-english-e0918.firebasestorage.app",
  messagingSenderId: "662540417958",
  appId: "1:662540417958:web:96e2c491b1f1276e15ad67"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
