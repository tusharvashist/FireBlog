import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAgLeZOCzdJW0Clc7rqFdZ5qcDVvbzcaq0",
  authDomain: "fireblogsyt-d4409.firebaseapp.com",
  projectId: "fireblogsyt-d4409",
  storageBucket: "fireblogsyt-d4409.appspot.com",
  messagingSenderId: "249295629210",
  appId: "1:249295629210:web:c5e698aec636a28ff72823",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

export { timestamp };
export default firebaseApp.firestore();
