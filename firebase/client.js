import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyALYafzH2nOtWgU1AxJ88cO80YLH5cXvdE",
  authDomain: "work-shop-nextjs.firebaseapp.com",
  databaseURL: "https://work-shop-nextjs.firebaseio.com",
  projectId: "work-shop-nextjs",
  storageBucket: "work-shop-nextjs.appspot.com",
  messagingSenderId: "13960620645",
  appId: "1:13960620645:web:3c8cd4053c16e2d9c5b48c",
  measurementId: "G-2Q54HBPDCB",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(gmailProvider);
};

const mapUserFromFirebase = (user) => {
  const { displayName, photoURL, email, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email: email,
    id: uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebase(user) : null;
    onChange(normalizedUser);
  });
};
