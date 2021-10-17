import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyD2ymbSpGQIt0FjCivCFvRRH2lg1wumLMc",
    authDomain: "democcp-9ac90.firebaseapp.com",
    projectId: "democcp-9ac90",
    storageBucket: "democcp-9ac90.appspot.com",
    messagingSenderId: "198044543758",
    appId: "1:198044543758:web:c43a572b1d003ad21f455f"
  };
  
firebase.initializeApp(firebaseConfig);
export default firebase;