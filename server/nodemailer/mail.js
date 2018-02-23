const nodemailer = require('nodemailer');
const { email } = require('../config/credentials.js');
const test = require('../test.js');

module.exports = function(app, path){
    app.post('/send', (req, res) => {
        const output = `
        <ul>
            <li>Events: ${test.events.name}</li>
            <li>Food: ${test.food.name}</li>
            <li>Drinks: ${test.drinks.name}</li>
        </ul>
    `
            
        nodemailer.createTestAccount((err, account) => {
    
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: email.user,
                    pass: email.password
                }
            });
        
            let mailOptions = {
                from: 'Datenight '+ email.user,
                to: req.body.email,
                subject: req.body.subject,
                text: 'Hello?',
                html: output
            };
        
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                res.send('email sent!')
            });
        });
    })
}
