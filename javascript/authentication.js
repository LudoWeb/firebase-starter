// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Vérifie que l'utilisateur est bien connecté
if (location.href.search('dashboard') != -1) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const username = document.querySelector('.username');
      username.innerHTML = user.email;
    } else {
      location.href = 'login.html';
    }
  });
}

// Connexion
const loginForm = document.querySelector('#loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value; 
  
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Connexion réussie
        location.href = 'dashboard.html';
      })
      .catch((error) => {
        // Connexion échouée
        const errors = document.querySelector('#errors'); 
        errors.innerHTML = error.message;
      });
  });
}

// Déconnexion
const logoutButton = document.querySelector('#logout');

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      location.href = 'login.html';
    }).catch((error) => {
      // An error happened.
    });
  });
}