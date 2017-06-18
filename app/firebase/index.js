import firebase from 'firebase'
try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsI6Aky-yWeGJ661-xmuwKGdd-CI3vOks",
    authDomain: "mead-todo-app-1f99f.firebaseapp.com",
    databaseURL: "https://mead-todo-app-1f99f.firebaseio.com",
    projectId: "mead-todo-app-1f99f",
    storageBucket: "mead-todo-app-1f99f.appspot.com",
    messagingSenderId: "880921504662"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
