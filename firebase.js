var firebaseConfig = {
    apiKey: "AIzaSyBuK2-CTAmDJhhbaczt8TPWAx5YUqJ_b1s",
    authDomain: "test-fa46f.firebaseapp.com",
    projectId: "test-fa46f",
    storageBucket: "test-fa46f.appspot.com",
    messagingSenderId: "623134955765",
    appId: "1:623134955765:web:46466b70f67de841a20dbc",
    measurementId: "G-EEJMKBKXFK"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var db = firebase.firestore();