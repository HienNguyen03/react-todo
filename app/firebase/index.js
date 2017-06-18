import firebase from 'firebase'
try {
  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCcf-NqgAPpKEF1TuslvcBOytjifupbdHU",
     authDomain: "mead-todo-app-acf1c.firebaseapp.com",
     databaseURL: "https://mead-todo-app-acf1c.firebaseio.com",
     projectId: "mead-todo-app-acf1c",
     storageBucket: "",
     messagingSenderId: "132838509889"
   };
   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
