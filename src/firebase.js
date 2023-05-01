import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIHcPorFka5n_HfO-J5W4JZiJjhn32SWI",
    authDomain: "linkedin-clone-caa13.firebaseapp.com",
    projectId: "linkedin-clone-caa13",
    storageBucket: "linkedin-clone-caa13.appspot.com",
    messagingSenderId: "557822695505",
    appId: "1:557822695505:web:8437db5a7ab3e802990070"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };    