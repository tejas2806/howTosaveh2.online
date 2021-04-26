




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBppkm7u2wNUCX531DOB8vE-Egl6mwhRy0",
    authDomain: "login2-e5be1.firebaseapp.com",
    projectId: "login2-e5be1",
    storageBucket: "login2-e5be1.appspot.com",
    messagingSenderId: "503570541279",
    appId: "1:503570541279:web:d4750abd859b46dc1cd76a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth=firebase.auth();








firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      window.open("dashboard.html");
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
