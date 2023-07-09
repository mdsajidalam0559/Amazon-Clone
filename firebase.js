 import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';

 const firebaseConfig = {
   apiKey: "AIzaSyDlGS8y-Z5W2ySyANreMrB2zvQkxK2m_Vw",
  authDomain: "clone-e0063.firebaseapp.com",
  projectId: "clone-e0063",
  storageBucket: "clone-e0063.appspot.com",
  messagingSenderId: "614367698692",
  appId: "1:614367698692:web:e6ac1a5cb3c8881edb3a51",
  measurementId: "G-8FLP25TEEZ"

};
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const auth = firebase.auth();
 export { auth };
 
 