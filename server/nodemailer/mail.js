const nodemailer = require('nodemailer');
const { email } = require('../config/credentials.js');
const test = require('../test.js');

module.exports = function(app, path){
    app.post('/send', (req, res) => {
        const output = `
        <div style="border: 3px solid red">
            <ul>
                <li><img src="${test.events.image_url}" style="width:50px;height:50px;"> Events: ${test.events.name}</li>
                <li><img src="${test.food.image_url}" style="width:50px;height:50px;"> Food: ${test.food.name}</li>
                <li><img src="${test.drinks.image_url}" style="width:50px;height:50px;"> Drinks: ${test.drinks.name}</li>
            </ul>
        </div>
        
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
