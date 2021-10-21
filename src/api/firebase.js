import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD-iSlg_sMJtO1QM2SQMfP4LNS9ySPjINc",
  authDomain: "getirtodos.firebaseapp.com",
  projectId: "getirtodos",
  storageBucket: "getirtodos.appspot.com",
  messagingSenderId: "410993844051",
  appId: "1:410993844051:web:4df90f5fae76e24d7c8ba6",
  measurementId: "G-CMYYPK88EM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
