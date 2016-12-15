import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyB16W2jVljSnip97AXESu7yURylV_iwDVA",
        authDomain: "rygg-todo-app.firebaseapp.com",
        databaseURL: "https://rygg-todo-app.firebaseio.com",
        storageBucket: "rygg-todo-app.appspot.com",
        messagingSenderId: "431685693263"
     };

     firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
