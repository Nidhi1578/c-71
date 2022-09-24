import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyANqczM9G3131RpS9ZBs3AyDsD9gPXgZlI",
    authDomain: "complaint-forum-f5bfe.firebaseapp.com",
    projectId: "complaint-forum-f5bfe",
    storageBucket: "complaint-forum-f5bfe.appspot.com",
    messagingSenderId: "512984211260",
    appId: "1:512984211260:web:64024295b97855c55a0839"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
