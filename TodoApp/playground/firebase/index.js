import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAQHYbbOvDAY3DaPxmUmSF0CKuLs4gPy3Q",
    authDomain: "todoapp-36f76.firebaseapp.com",
    databaseURL: "https://todoapp-36f76.firebaseio.com",
    projectId: "todoapp-36f76",
    storageBucket: "todoapp-36f76.appspot.com",
    messagingSenderId: "685320754266"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
// Set
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Arturo',
        age: 31
    }
});

// Todos
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});
//Arrays
//  var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });

//  var newNoteRef = notesRef.push();
//  newNoteRef.set({
//      text: 'wlk asdf poiu'
//  });
// console.log('note id', newNoteRef.key);

//Fetching
// firebaseRef.child('user').on('value', (snapshot) => {
//      console.log('Got value', snapshot.val());
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('Got value', snapshot.val());
// });

// firebaseRef.once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

//Remove
//firebaseRef.child('user').remove();

//Updates
// firebaseRef.child('user').update({
//     name: 'Mauricio'
// });
// firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application',
//     'user/name': 'Mau'
// });

// firebaseRef.child('app').update({
//     name: 'New todo app'
// }).then(() => {
//     console.log('Update worked!');
// }, (e) => {
//     console.log('Update failed!');
// });