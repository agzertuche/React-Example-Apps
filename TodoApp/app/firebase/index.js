import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAQHYbbOvDAY3DaPxmUmSF0CKuLs4gPy3Q",
        authDomain: "todoapp-36f76.firebaseapp.com",
        databaseURL: "https://todoapp-36f76.firebaseio.com",
        projectId: "todoapp-36f76",
        storageBucket: "todoapp-36f76.appspot.com",
        messagingSenderId: "685320754266"
    };

    firebase.initializeApp(config);
} 
catch (e) {
    console.log('firebase error:', e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;