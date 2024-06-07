// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuh-aSbP6cNQkeDsdm1xCcXM-yC22bi4E",
    authDomain: "fir-35d79.firebaseapp.com",
    projectId: "fir-35d79",
    storageBucket: "fir-35d79.appspot.com",
    messagingSenderId: "834377084560",
    appId: "1:834377084560:web:5183aa5489360a3dc17215",
    databaseURL: "https://fir-35d79-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
var storage = firebase.storage();

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // 如果已經初始化，就使用現有的實例
}