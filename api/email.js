require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// OAuth2 Setup
const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// Email sending function
async function sendMail({ firstName, lastName, phone, email, message }) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        if (!accessToken.token) {
            throw new Error('Failed to obtain access token');
        }

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'ydevelop2024@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });

        const mailOptions = {
            from: 'Yash Patel <ydevelop2024@gmail.com>',
            to: 'jdgt.yp.2004@gmail.com',
            subject: 'New Business Inquiry',
            text: `You have a new contact form submission from ${firstName} ${lastName}.\n\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`,
            html: `<h1>New Business Inquiry</h1>
                   <p><strong>First Name:</strong> ${firstName}</p>
                   <p><strong>Last Name:</strong> ${lastName}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>
                   <i>This message was sent via www.skmanagement.com</i>`,
        };

        const result = await transport.sendMail(mailOptions);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Serverless function handler
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { firstName, lastName, phone, email, message } = req.body;
        try {
            console.log('Received data:', req.body); // Log the incoming request body
            const result = await sendMail({ firstName, lastName, phone, email, message });
            console.log('Email sent successfully');
            res.status(200).send('Email sent successfully');
        } catch (error) {
            res.status(500).send('Error sending email');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
