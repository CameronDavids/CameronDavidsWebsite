  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBb8Z1vtGtbZ-8x9Bzr7h5h1G-2XiXHT6o",
    authDomain: "website-296b6.firebaseapp.com",
    databaseURL: "https://website-296b6.firebaseio.com",
    projectId: "website-296b6",
    storageBucket: "",
    messagingSenderId: "802203419545",
    appId: "1:802203419545:web:ddae10246ea46fe7"
  };
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
