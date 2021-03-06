import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyADmDX6j6wGcJdRtl6SUcn4njBwQjgK7Z4",
    authDomain: "built-in-southern-utah.firebaseapp.com",
    databaseURL: "https://built-in-southern-utah.firebaseio.com",
    projectId: "built-in-southern-utah",
    storageBucket: "",
    messagingSenderId: "280668379984",
    appId: "1:280668379984:web:8a67bc0acd2d291f"
};

const fire = firebase.initializeApp(config);

// Google Signin:
const googleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(googleProvider)

    firebase.auth().getRedirectResult().then(function (result) {
        console.log("Google Signin Result: ", result);
    })
}

// Github Signin:
const gitHubSignIn = () => {
    var githubProvider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(githubProvider)

    firebase.auth().getRedirectResult().then(function (result) {
        console.log("Github Signin Result: ", result);
    })
}

// Twitter Signin:
const twitterSignIn = () => {
    var twitterProvider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(twitterProvider);

    firebase.auth().getRedirectResult().then(function (result) {
        console.log("Twitter Signin Result: ", result);
    })

}

const db = firebase.firestore();
export default fire;
export { db };
export { googleSignIn, gitHubSignIn, twitterSignIn }