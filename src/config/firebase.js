import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQH3btIQyLc98JarvTD_bPD-GjeBON9dQ",
  authDomain: "orders-hotelmasterchef.firebaseapp.com",
  projectId: "orders-hotelmasterchef",
  storageBucket: "orders-hotelmasterchef.appspot.com",
  messagingSenderId: "424116459294",
  appId: "1:424116459294:web:09de90fff8b32d4e64db0f",
  measurementId: "G-S9DDHZD51J"
};
// initialize app
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const activeOrdersRef = db.collection('activeOrders')
