// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRED7IAAoNSDdjQv1LNvmONGV8wmMwsqM',
  authDomain: 'crime-report-cd6e3.firebaseapp.com',
  projectId: 'crime-report-cd6e3',
  storageBucket: 'crime-report-cd6e3.appspot.com',
  messagingSenderId: '686462768314',
  appId: '1:686462768314:web:6d10a51828d45b697a5e83',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
