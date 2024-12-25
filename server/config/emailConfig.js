const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    },
    // logger: true, // Enable logging
    // debug: true, // Enable debug logging
    tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
    }
});

// More detailed verification
transporter.verify((error, success) => {
    if (error) {
        console.log('Transporter verification error details:');
        console.log('Error code:', error.code);
        console.log('Error message:', error.message);
        console.log('Full error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

module.exports = transporter;