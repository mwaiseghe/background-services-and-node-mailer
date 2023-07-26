const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

function createTranporter(config){
    return nodemailer.createTransport(config);
}

let config = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
};

const sendMail = async (mailOptions) => {
    let transporter = createTranporter(config);
    await transporter.verify();
    await transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    }
    );
}

module.exports= {
    sendMail
}