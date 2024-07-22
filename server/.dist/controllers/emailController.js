"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSendEmail = void 0;
const client_ses_1 = require("@aws-sdk/client-ses");
// Singleton SES client instance
let sesClient = null;
const getSESClient = () => {
    if (!sesClient) {
        sesClient = new client_ses_1.SESClient({
            region: process.env.VITE_AWS_REGION,
            credentials: {
                accessKeyId: process.env.VITE_AWS_ACCESS_KEY,
                secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
            },
        });
    }
    return sesClient;
};
const sendEmailWithSES = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const sesClient = getSESClient();
    const command = new client_ses_1.SendEmailCommand(params);
    try {
        const response = yield sesClient.send(command);
        return response;
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw error; // Rethrow other errors for general handling
    }
});
const handleSendEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, phone, email, message, tokenSuccess } = req.body;
    const params = {
        Source: process.env.VITE_CONTACT_FORM_SENDER,
        Destination: {
            ToAddresses: [process.env.VITE_CONTACT_FORM_RECIPIENT],
        },
        Message: {
            Subject: {
                Data: `${firstName} ${lastName} Submitted the Contact Form`,
            },
            Body: {
                Html: {
                    Data: `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone (Optional)</strong> ${phone}</p>
                    <p><strong>Message:</strong> ${message}</p>
                    `,
                },
            },
        },
    };
    try {
        const response = yield sendEmailWithSES(params);
        console.log(response);
        if (response && response.$metadata.httpStatusCode === 200)
            res.status(200).json({
                success: true,
                successMessage: "Email sent successfully.",
                tokenSuccess: tokenSuccess,
            });
    }
    catch (error) {
        console.error("SES SendEmail Error:", error);
        res.status(500).json({
            success: false,
            tokenSuccess: tokenSuccess,
            errors: {
                message: "An error occurred while attempting to send your message.",
                error: error,
            },
        });
    }
});
exports.handleSendEmail = handleSendEmail;
