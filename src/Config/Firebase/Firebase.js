import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'




var firebaseConfig = {
    apiKey: "AIzaSyCla1Jojw5J5HmEPgdQ2J-i6Ke70OVy-5A",
    authDomain: "fastfood-1.firebaseapp.com",
    databaseURL: "https://fastfood-1.firebaseio.com",
    projectId: "fastfood-1",
    storageBucket: "fastfood-1.appspot.com",
    messagingSenderId: "923840175878",
    appId: "1:923840175878:web:ccd5f89afa548d4f404887"
};
firebase.initializeApp(firebaseConfig);

export default firebase