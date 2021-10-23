import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbmTrXiVLr2Odc4tHtMlypJs3IKi5YgUI",
  authDomain: "myfridge-539ff.firebaseapp.com",
  projectId: "myfridge-539ff",
  storageBucket: "myfridge-539ff.appspot.com",
  messagingSenderId: "1079458608744",
  appId: "1:1079458608744:web:34402d834d8540e42beddd",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
