var firebaseConfig = {
    apiKey: "AIzaSyA0AGnvz0189y2aoSdELxJF9-8pVrElpQw",
    authDomain: "clone-a5d10.firebaseapp.com",
    projectId: "clone-a5d10",
    storageBucket: "clone-a5d10.appspot.com",
    messagingSenderId: "153313935218",
    appId: "1:153313935218:web:7acd2c7ba7388b4041a7eb",
    measurementId: "G-SJ36B4SN6J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();