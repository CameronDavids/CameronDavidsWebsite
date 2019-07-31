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
    service: 'gmail',

    auth: {
        user: gmailEmail,
        password: gmailPassword,
    }
});

function sendmail(name, email, message){

    var mailOptions={

        from: gmailEmail,
        to: gmailEmail,
        subject:'new form submitted',
        html: `<h1>New contact request</h1>
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Email</h3>
        <p>${email}</p>
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
    
};

exports.sendEmails = functions.database.ref('/message/{name}').onCreate((snapshot, context) =>{
    const val = snapshot.val();
    const name = val.name;
    const email = val.email;
    const message = val.message;
    sendmail(name, email, message);
    return null;
});
