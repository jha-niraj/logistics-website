const transporter = require('../config/emailConfig');

const sendContactFormEmail = async(formData) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'singhkratik799@gmail.com',
            // to: "nirajjha3110@gmail.com",
            subject: 'Feedback Form Submission',
            html: `
                <h2>New Feedback Form</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Rating:</strong> ${formData.rating}</p>
                <p><strong>Comments:</strong> ${formData.comments}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error('Failed to send email');
    }
};
const sendEmailFromContactPage = async(formData) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'singhkratik799@gmail.com',
            subject: 'Contact Form Submission',
            html: `
                <h1>Contact Form Submission</h1>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <h3><strong>Subject:</strong> ${formData.subject}</h3>
                <h1><strong>Message:</strong> ${formData.message}</h1>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error('Failed to send email');
    }
};
const sendRateRequestMessage = async (formData) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "singhkratik799@gmail.com",
            subject: "Rate Request Inquiery",
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        .email-container {
                            font-family: Arial, sans-serif;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f9f9f9;
                        }
                        .header {
                            background-color: #003366;
                            color: white;
                            padding: 15px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .content {
                            background-color: white;
                            padding: 20px;
                            border-radius: 0 0 5px 5px;
                            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        }
                        .field {
                            margin-bottom: 15px;
                            padding-bottom: 10px;
                            border-bottom: 1px solid #eee;
                        }
                        .label {
                            font-weight: bold;
                            color: #003366;
                            margin-bottom: 5px;
                            display: block;
                        }
                        .value {
                            color: #333;
                            line-height: 1.5;
                        }
                        .footer {
                            margin-top: 20px;
                            text-align: center;
                            color: #666;
                            font-size: 12px;
                        }
                        .reference {
                            background-color: #f0f7ff;
                            padding: 10px;
                            border-radius: 5px;
                            margin-top: 15px;
                            border-left: 4px solid #003366;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h2 style="margin: 0;">New Rate Request Inquiry</h2>
                            <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleDateString()}</p>
                        </div>
                        
                        <div class="content">
                            <div class="field">
                                <span class="label">Client Name:</span>
                                <div class="value">${formData.clientName}</div>
                            </div>
                            
                            <div class="field">
                                <span class="label">Brand Name:</span>
                                <div class="value">${formData.brandName}</div>
                            </div>
                            
                            <div class="field">
                                <span class="label">Contact Information:</span>
                                <div class="value">
                                    📧 ${formData.email}<br>
                                    📱 ${formData.phone}<br>
                                    📍 ${formData.address}
                                </div>
                            </div>
                            
                            <div class="field">
                                <span class="label">Product Details:</span>
                                <div class="value">
                                    <strong>Products:</strong> ${formData.products}<br>
                                    <strong>Origin:</strong> ${formData.productOrigin}<br>
                                    <strong>Export Products:</strong> ${formData.productToExport}
                                </div>
                            </div>
                            
                            <div class="field">
                                <span class="label">Objective:</span>
                                <div class="value">${formData.objective}</div>
                            </div>
                            
                            <div class="reference">
                                <span class="label">Reference Number:</span>
                                <div class="value">${formData.referenceNumber}</div>
                            </div>
                        </div>
                        
                        <div class="footer">
                            <p>This is an automated email sent from your website's contact form.</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        }

        const info = await transporter.sendMail(mailOptions);
        return {
            success: true,
            messageId: info.messageId
        }

    } catch (err) {
        console.error('Email sending failed:', error);
        throw new Error('Failed to send email');
    }
}

module.exports = {
    sendContactFormEmail,
    sendEmailFromContactPage,
    sendRateRequestMessage
};