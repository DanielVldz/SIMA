

// proper initialization
if( 'function' === typeof importScripts) {
/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyC_w8ChYDkC8goInoOa_Y-AiD8asmIMH3E",
    authDomain: "sima-a43d7.firebaseapp.com",
    projectId: "sima-a43d7",
    storageBucket: "sima-a43d7.appspot.com",
    messagingSenderId: "405843296858",
    appId: "1:405843296858:web:b54ebd6afa6189b1320e63",
    measurementId: "G-FMD987NXHH"
  };

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
}