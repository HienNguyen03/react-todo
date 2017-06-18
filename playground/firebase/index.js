import firebase from 'firebase'
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
var firebaseRef = firebase.database().ref();
//
//
// firebaseRef.set({
// app: {
//   name: 'Todo App',
//   version: '1.0.0'
// },
// isRunning: true,
// user: {
//   name: 'Lily',
//   age: 25
// }
// });

// var todosRef = firebaseRef.child('todos');
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// todosRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Do something'
// });
// todosRef.push({
//   text: 'Do something 2'
// });
// var notesRef = firebaseRef.child('notes');
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
// var newChildNote = notesRef.push({
//   note: 'note 1'
// });

// var logData = (snapshot) => {
//   console.log('Data change ', snapshot.key, snapshot.val());
// };
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.child('user').update({
//   name: 'Alex',
//   age: 24
// });
//
// firebaseRef.child('app').update({
//   name: 'todo app',
//   version: '2.0.0'
// });
// firebaseRef.on('value', logData);
// firebaseRef.off(logData);
// firebaseRef.update({
//   isRunning: false
// });


// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('All data : ', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Cannot fetch data', e);
// });
////----------------------------------------------------------
// firebaseRef.child('app/name').remove();
// firebaseRef.child('user').update({
//   name: 'lily',
//   age: null
// });
////----------------------------------------------------------
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name' : 'Lily2'
// }).then(() => {
//   console.log('path update');
// }, () => {
//   console.log('path not update');
// });
//
// firebaseRef.child('user').update({
//   name: 'Hien'
// }).then(() => {
//   console.log('path update');
// }, () => {
//   console.log('path not update');
// });
