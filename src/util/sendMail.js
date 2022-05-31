const nodemailer = require('nodemailer');
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
  

  
module.exports = {
    sendMail1: function(to,subject,change, create,token,next) {
        let mailDetails = {
            from: process.env.EMAIL_USER,
            to: to,
        };
        console.log("Send mail")
        mailDetails.subject = 'Afleet Password'
        mailDetails.text = 'Change your password with token'+token
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs'+err);
            } else {
                console.log('Email sent successfully'+to);
            }
        });
    }
}
