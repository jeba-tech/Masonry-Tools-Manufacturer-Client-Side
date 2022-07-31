// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDZ-hEku8bSspiKOKELas6-uryyGFah0Ug",
      authDomain: "masonry-tools-17296.firebaseapp.com",
      projectId: "masonry-tools-17296",
      storageBucket: "masonry-tools-17296.appspot.com",
      messagingSenderId: "422680641879",
      appId: "1:422680641879:web:ec8a941b9c6e7781397e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);
export default auth;