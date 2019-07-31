const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const nodemailer= require('nodemailer');

const gmailEmail= functions.config().gmail.email;
const gmailPassword= functions.config().gmail.password;

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: gmailEmail,
        password: gmailPassword,
    }
});

exports.sendEmails = functions.database.ref('/message/{name}').onCreate((snapshot, context) =>{
    const val = snapshot.val();
     const name = val.name;
    const email = val.email;
     const message = val.message;
     const phone = val.phone;


    var mailOptions={
        from:gmailEmail,
        to: gmailEmail,
        subject:'New Submission',
        html: `<h1>Someone is trying to contact you!</h1>
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Email</h3>
        <p>${email}</p>
        <h3>Number Phone</h3>
        <p>${phone}</p>
        <h3>Message</h3>
        <p>${message}</p>`
   
     };
    

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:' + info.response);
    }

});


return null;
});


    
