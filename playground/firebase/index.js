import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB16W2jVljSnip97AXESu7yURylV_iwDVA",
    authDomain: "rygg-todo-app.firebaseapp.com",
    databaseURL: "https://rygg-todo-app.firebaseio.com",
    storageBucket: "rygg-todo-app.appspot.com",
    messagingSenderId: "431685693263"
 };
 firebase.initializeApp(config);

 var firebaseRef = firebase.database().ref();

 firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Erik',
        age: 137
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({ text: 'Pick up the twins' });
todosRef.push({ text: 'Take out the trash' });


// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//     text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);
