import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
var firebaseConfig = {
    apiKey: "AIzaSyC_w8ChYDkC8goInoOa_Y-AiD8asmIMH3E",
    authDomain: "sima-a43d7.firebaseapp.com",
    projectId: "sima-a43d7",
    storageBucket: "sima-a43d7.appspot.com",
    messagingSenderId: "405843296858",
    appId: "1:405843296858:web:b54ebd6afa6189b1320e63",
    measurementId: "G-FMD987NXHH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const registerToken = async () => {
  console.log('in register token')
  let token
    await getToken(messaging, { vapidKey: 'BCI5v_RWyVfJmf1P4g8IouxMudEEzbcssOL7Ps6-_uypP2ea9ufDuAIX_tVIkbbOsmWxtKckXp8bdZzRR1AyRzQ' }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log('current token',currentToken)
          token = currentToken;
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
      return token
}


export{registerToken};
export default messaging;