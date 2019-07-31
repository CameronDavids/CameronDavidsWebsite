 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCB98HsGqG_vxVedq9Ql9TRjcfpUrV-BQM",
    authDomain: "contactform-93362.firebaseapp.com",
    databaseURL: "https://contactform-93362.firebaseio.com",
    projectId: "contactform-93362",
    storageBucket: "contactform-93362.appspot.com",
    messagingSenderId: "158913922385",
    appId: "1:158913922385:web:17a1410dc938ab49"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// refference message collection
var messagesRef = firebase.database().ref('messages');


// Listen for submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();


    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // save message
    saveMessage(name, email, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';},3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to fire 
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}
