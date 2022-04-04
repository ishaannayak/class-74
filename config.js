import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCCLFOgaP86umQE1_tL9KJ24hMSAAISqnI",
  authDomain: "e-library-ddd5d.firebaseapp.com",
  projectId: "e-library-ddd5d",
  storageBucket: "e-library-ddd5d.appspot.com",
  messagingSenderId: "889604376364",
  appId: "1:889604376364:web:8a7dc4ab17e0e4bf0e4e89"
}
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();