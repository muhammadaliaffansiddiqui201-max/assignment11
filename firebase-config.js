var firebaseConfig = {
  apiKey: "AIzaSyDWHS8ZdhJqizd0SL7bYraQi5GEgSFttAk",
  authDomain: "todo-app1-72a07.firebaseapp.com",
databaseURL:"https://todo-app1-72a07-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-app1-72a07",
  storageBucket: "todo-app1-72a07.appspot.com",
  messagingSenderId: "25213059726",
  appId: "1:25213059726:web:e6d70ba9ebc5c74e1a7fdf"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();