// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

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

const db = getFirestore(app);

const buttonAddListing = document.querySelector('#addListing');

if (buttonAddListing) {
  buttonAddListing.addEventListener('click', addListing);
}

const addListing = async () => {
  console.log('jadd le lsii');
  try {
    const docRef = await addDoc(collection(db, "listings"), {
      name: "Superbe villa à Clermont-Ferrand",
      rooms: 4,
      localization: "Clermont-Ferrand",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};