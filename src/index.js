import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZL8W9kZm0qmB_3RjYWbYk3RwriO7eTKI",
  authDomain: "proyecto-reactjs-coderho-e3224.firebaseapp.com",
  projectId: "proyecto-reactjs-coderho-e3224",
  storageBucket: "proyecto-reactjs-coderho-e3224.appspot.com",
  messagingSenderId: "862208919787",
  appId: "1:862208919787:web:a555e5dfa0ed20312196ae"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
