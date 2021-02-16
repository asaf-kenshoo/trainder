import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9yafA7QNK4udVldJKDBiIbNbS3HJAvWQ",
    authDomain: "trainder-a38ad.firebaseapp.com",
    databaseURL: "https://trainder-a38ad-default-rtdb.firebaseio.com",
    projectId: "trainder-a38ad",
    storageBucket: "trainder-a38ad.appspot.com",
    messagingSenderId: "427323514039",
    appId: "1:427323514039:web:1dfca0a5b0a5bbfc798132",
    measurementId: "G-FYLE1FKJD2"
};

let instance = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default instance