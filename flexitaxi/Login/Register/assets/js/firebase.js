  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCmRRHHM9p-iH0te_ogTn9VDrbb4_dpS8M",
    authDomain: "flexitaxi-5fe8a.firebaseapp.com",
    projectId: "flexitaxi-5fe8a",
    storageBucket: "flexitaxi-5fe8a.appspot.com",
    messagingSenderId: "1048383531530",
    appId: "1:1048383531530:web:ade6b5e7ca6fc85b694df3"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);